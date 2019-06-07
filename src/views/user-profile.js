import { LitElement, html, css } from 'lit-element';
import { GlobalStyles } from '../utils/global-styles';

class UserProfile extends LitElement {

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
      <p>ID: ${location.params.id}</p>
    `;
  }
}

window.customElements.define('user-profile', UserProfile);