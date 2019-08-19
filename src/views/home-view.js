import { LitElement, html, css } from 'lit-element';
import { CustomStyles, ViewStyle } from '../utils/custom-styles';
import '../components/language-selector';
import { LocalMixin } from '../localize';

class HomeView extends LocalMixin(LitElement) {
  static get styles() {
    return [
      CustomStyles,
      ViewStyle,
      css`
        :host{
          background-image: url('assets/backgrounds/lamp.jpg');
        }

        p {
          margin-top: 0;
        }

        language-selector {
          display: flex;
          align-items: center;
          position: absolute;
          bottom: 20px;
          right: 20px;
        }
      `
    ];
  }

  render() {
    return html`
      <section>
        <h1>${super.locales.home_title[0]} <span>${super.locales.home_title[1]}</span></h1>
        <h1>${super.locales.home_title_sub}</h1>
        <hr>
        <p>${super.locales.subtitle}</p>
        <div>
          <a href="https://github.com/vicdata4/Roll_Lit_Redux_Seed" class="custom-link" target="_blank" rel="noopener">${super.locales.github}</a>
          <a href="/rollup" class="custom-link red" @click="${this.setActiveButton}">${super.locales.quick_start}</a>
        </div>
        <language-selector></language-selector>
      </section>
    `;
  }

  setActiveButton() {
    this.dispatchEvent(new CustomEvent('set-active-button', {
      bubbles: true,
      composed: true,
      detail: { path: '/rollup' }
    }));
  }
}

window.customElements.define('home-view', HomeView);
