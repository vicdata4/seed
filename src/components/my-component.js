import { LitElement, html, css } from 'lit-element';

class MyComponent extends LitElement {
  /* eslint-disable require-jsdoc */
  static get styles() {
    return [
      css`
        h5 {
          color: var(--app-title-color, grey);
        }
      `,
    ];
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <div>
        <h5>This is my component</h5>  
      </div>
    `;
  }
}

window.customElements.define('my-component', MyComponent);
