import { LitElement, html, css } from 'lit-element';
import { CustomStyles, ViewStyle } from '../utils/custom-styles';
import { auth } from '../middleware/auth';
import '../components/login-form';
import '../components/notes-manager';
import '../components/seed-spinner';

class AppView extends LitElement {
  static get styles() {
    return [
      CustomStyles,
      ViewStyle,
      css`
        :host {
          background-image: url('assets/images/backgrounds/cloud.jpg');
        }
      `
    ];
  }

  static get properties() {
    return {
      isAuth: { type: Boolean },
      spinner: { type: Boolean }
    };
  }

  constructor() {
    super();
    this.spinner = true;
    this.isAuth = false;
    this.checkAuth();
  }

  async checkAuth() {
    this.isAuth = await auth();
    this.spinner = false;
  }

  render() {
    const showApp = this.isAuth
      ? html`<notes-manager></notes-manager>`
      : html`<login-form></login-form>`;

    return this.spinner
      ? html`<seed-spinner></seed-spinner>`
      : showApp;
  }
}

window.customElements.define('app-view', AppView);
