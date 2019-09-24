import { LitElement, html, css } from 'lit-element';
import { CustomStyles, ViewStyle } from '../utils/custom-styles';

class NotFoundView extends LitElement {
  static get styles() {
    return [
      CustomStyles,
      ViewStyle,
      css`
        :host{
          background-image: url('assets/images/backgrounds/lamp.jpg');
        }
      `
    ];
  }

  render() {
    return html`
      <section>
        <h1>Page not found</h1>
        <hr>
        <a href="/" class="custom-link red" @click="${this.setActiveButton}">Go to Home page</a>
      </section>
    `;
  }

  setActiveButton() {
    this.dispatchEvent(new CustomEvent('set-active-button', {
      bubbles: true,
      composed: true,
      detail: { path: '/' }
    }));
  }
}

window.customElements.define('not-found-view', NotFoundView);
