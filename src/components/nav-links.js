import { LitElement, html, css } from 'lit-element';

class NavLinks extends LitElement {
  /* eslint-disable require-jsdoc */
  static get styles() {
    return [
      css`
        
      `,
    ];
  }

  constructor() {
    super();
  }

  render() {
    return html`
     <div>
      <a href="#1">Link 1</a>
      <a href="#2">Link 2</a>
      <a href="#3">Link 3</a>
      <a href="#4">Link 4</a>
     </div>
    `;
  }
}

window.customElements.define('nav-links', NavLinks);