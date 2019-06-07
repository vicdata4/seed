import { LitElement, html, css } from 'lit-element';
import './components/my-component';
import './components/nav-links';
import { GlobalStyles } from './utils/global-styles';

class AppShell extends LitElement {

  static get styles() {
    return [
      GlobalStyles,
      css``,
    ];
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <div>Hello world</div>
      <nav-links></nav-links>
      <my-component></my-component>
    `;
  }
}

window.customElements.define('app-shell', AppShell);
