import { LitElement, html, css } from 'lit-element';
import { Router } from '@vaadin/router';

import './views/nav-view';
import './views/home-view';
import './views/rollup-view';
import './views/redux-view';
import './views/not-found-view';

class AppShell extends LitElement {

  static get styles() {
    return [
      css`
        :host {
            display: grid;
            grid-template-rows: 100px 1fr;
            height: 100%;
        }

        @media (min-width: 768px) {
            :host {
                grid-template-rows: unset;
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
        {path: '(.*)', component: 'not-found-view'},
      ]);
  }

  render() {
    return html`
        <nav-view></nav-view>
        <div id="root"></div>
    `;
  }
}

window.customElements.define('app-shell', AppShell);
