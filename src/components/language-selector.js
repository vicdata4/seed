import { LitElement, html, css } from 'lit-element';
import { LocalMixin } from '../localize';

class LanguageSelector extends LocalMixin(LitElement) {
  static get styles() {
    return css`
        button {
            background: none;
            border: none;
            opacity: .6;
            cursor: pointer;
        }

        img {
            width: 30px;
            height: 30px;
        }

        span {
          font-size: 16px;
          color: #c2bba3;
          padding-right: 15px;
        }

        .active {
          opacity: 1;
        }
      `;
  }

  render() {
    return html`
      <span>${super.locales.language}</span>
      ${super.paises.map(x => html`
          <button type="button" class="${x === super.currentCountry() ? 'active' : ''}" @click="${() => this.setLanguage(x)}">
            <img src="assets/translations/flags/${x}.png">
          </button>
      `)}
    `;
  }

  setLanguage(lang) {
    if (navigator.cookieEnabled) {
      sessionStorage.setItem('language', lang);
      location.pathname = lang;
    }
  }
}

window.customElements.define('language-selector', LanguageSelector);
