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
      <a href="/">HOME</a>
      <a href="/users">User list</a>
      <a href="/users/kim">Kim link</a>
      <a href="#3">Link 3</a>
      <a href="#4">Link 4</a>
     </div>
    `;
  }
}

window.customElements.define('nav-links', NavLinks);