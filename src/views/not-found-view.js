import { LitElement, html, css } from 'lit-element';
import { CustomStyles, ViewStyle } from '../utils/custom-styles';

class NotFoundView extends LitElement {

  static get styles() {
    return [
      CustomStyles,
      ViewStyle,
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
      <section>Not found</section>
    `;
  }
}

window.customElements.define('not-found-view', NotFoundView);
