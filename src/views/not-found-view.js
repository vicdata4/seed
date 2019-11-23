import { LitElement, html, css } from 'lit-element';
import { CustomStyles, ViewStyle } from '../utils/custom-styles';
import { locales } from '../../assets/translations';
import { seedStyle } from 'seed-catalog/styles.js';

class NotFoundView extends LitElement {
  static get styles() {
    return [
      CustomStyles,
      ViewStyle,
      seedStyle,
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
        <h1>${locales.page_not_found}</h1>
        <hr>
        <a href="/" class="sd-btn red-mate" @click="${this.setActiveButton}">
          ${locales.page_not_found_text}
        </a>
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
