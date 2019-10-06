import { LitElement, html, css } from 'lit-element';
import { CustomStyles, ViewStyle } from '../utils/custom-styles';
import { auth } from '../middleware/auth';
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
      showApp: { type: Boolean }
    };
  }

  constructor() {
    super();

    this.showApp = false;
    this.authenticate();
  }

  async authenticate() {
    this.showApp = await auth();
  }

  render() {
    return this.showApp || html`<seed-spinner></seed-spinner>`;
  }
}

window.customElements.define('app-view', AppView);
