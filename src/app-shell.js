import { LitElement, html, css } from 'lit-element';

import './components/navigation-menu';
import './views/home-view';
import './views/litelement-view';
import './views/rollup-view';
import './views/redux-view';
import './views/vaadin-view';
import './views/not-found-view';

import { routing, navigator } from './routing';
import { menu } from './utils/svg-icons';

class AppShell extends LitElement {
  static get styles () {
    return [
      css`
        :host {
          display: grid;
          position: relative;
          grid-template-rows: 80px 1fr;
          background-color: black;
          width: 100%;
          height: 100%;
          overflow: hidden;
          font-family: 'Ubuntu', sans-serif;
        }

        header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        header button {
          background: unset;
          border: none;
          cursor: pointer;
        }

        div#root {
          overflow: hidden;
        }

        navigation-menu {
          display: block;
          position: absolute;
          top: 0;
          left: 100%;
          right: 0;
          bottom: 0;
          z-index: 1;
          transition: left 1s;
        }

        img {
          width: 120px;
          padding: 10px;
        }

        @media (min-width: 768px) {
          :host {
            grid-template-rows: 1fr;
            grid-template-columns: 30% 1fr;
          }

          header {
            display: none;
          }

          navigation-menu {
            all: unset;
          }
        }
      `
    ];
  }

  constructor () {
    super();

    window.addEventListener('set-active-button', (e) => {
      const nav = this.shadowRoot.querySelector('navigation-menu');
      nav.setActive(navigator.findIndex((i) => i.path === e.detail.path));
    });
  }

  firstUpdated () {
    routing.call(this);
  }

  openMobileMenu () {
    this.shadowRoot.querySelector('navigation-menu').style.left = '0';
  }

  render () {
    return html`
        <navigation-menu></navigation-menu>
        <header>
          <img src="assets/logo.png" alt="Logo">
          <button @click="${this.openMobileMenu}" aria-label="Open menu">${menu}</button>
        </header>
        <div id="root"></div>
    `;
  }
}

window.customElements.define('app-shell', AppShell);
