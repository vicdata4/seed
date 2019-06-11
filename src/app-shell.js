import { LitElement, html, css } from 'lit-element';
import { Router } from '@vaadin/router';

import './components/navigation-menu';
import './views/home-view';
import './views/litelement-view';
import './views/rollup-view';
import './views/redux-view';
import './views/vaadin-view';
import './views/not-found-view';

class AppShell extends LitElement {

  static get styles() {
    return [
      css`
        :host {
            display: grid;
            grid-template-rows: 80px 1fr;
            background-color: black;
            width: 100%;
            height: 100%;
        }

        .header {
          display: flex;
          justify-content: center;
          align-items: center;
          border-right: 1px solid #212121;
        }

        div#root {
          overflow: hidden;
        }

        div navigation-menu {
          display: none;
        }

        @media (min-width: 768px) {
            :host {
                grid-template-rows: 1fr;
                grid-template-columns: 30% 1fr;
            }

            div navigation-menu {
              display: block;
            }
        }
      `,
    ];
  }

  constructor() {
    super();
    
    window.addEventListener('set-active-button', (e) => {
        const navigator = this.shadowRoot.querySelector('navigation-menu');
        navigator.setActive(navigator.navList.findIndex((i) => i.route === e.detail.path));

    });
  }

  firstUpdated() {
    const outlet = this.shadowRoot.getElementById('root');
    const router = new Router(outlet);

    router.setRoutes([
        {path: '/',   component: 'home-view'},
        {path: '/rollup',  component: 'rollup-view'},
        {path: '/redux',  component: 'redux-view'},
        {path: '/litelement',  component: 'litelement-view'},
        {path: '/vaadin',  component: 'vaadin-view'},
        {path: '(.*)', component: 'not-found-view'},
      ]);
  }

  render() {
    return html`
        <div class="header">
          <navigation-menu></navigation-menu>
        </div>
        <div id="root"></div>
    `;
  }
}

window.customElements.define('app-shell', AppShell);
