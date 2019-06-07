import { LitElement, html, css } from 'lit-element';
import { GlobalStyles } from '../utils/global-styles';

class UsersView extends LitElement {

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
      <div>Users View</div>
    `;
  }
}

window.customElements.define('users-view', UsersView);
