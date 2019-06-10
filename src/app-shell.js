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
            grid-template-rows: 100px 1fr;
            background-color: black;
            width: 100%;
            height: 100%;
            
        }

        div {
          overflow: hidden;
        }

        @media (min-width: 768px) {
            :host {
                grid-template-rows: 1fr;
                grid-template-columns: 30% 1fr;
            }
        }
      `,
    ];
  }

  constructor() {
    super();
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
        <navigation-menu></navigation-menu>
        <div id="root"></div>
    `;
  }
}

window.customElements.define('app-shell', AppShell);
