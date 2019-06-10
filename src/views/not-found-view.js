import { LitElement, html, css } from 'lit-element';
import { CustomStyles } from '../utils/custom-styles';

class NotFoundView extends LitElement {

  static get styles() {
    return [
      CustomStyles,
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
