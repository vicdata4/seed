import { LitElement, html, css } from 'lit-element';
import { GlobalStyles } from '../utils/global-styles';

class NotFoundView extends LitElement {

  static get styles() {
    return [
      GlobalStyles,
      css`
        :host {
          background-color: red;
        }
      `,
    ];
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <div>Not found</div>
    `;
  }
}

window.customElements.define('not-found-view', NotFoundView);
