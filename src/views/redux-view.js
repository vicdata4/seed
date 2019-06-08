import { LitElement, html, css } from 'lit-element';
import { GlobalStyles } from '../utils/global-styles';

class ReduxView extends LitElement {

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
      <div>User profile: </div>
    `;
  }
}

window.customElements.define('redux-view', ReduxView);