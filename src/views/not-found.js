import { LitElement, html, css } from 'lit-element';
import { GlobalStyles } from '../utils/global-styles';

class NotFound extends LitElement {

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
      <div>Not found</div>
    `;
  }
}

window.customElements.define('not-found', NotFound);
