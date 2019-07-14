import { LitElement, html, css } from 'lit-element';
import { countries, currentCountry, locales } from '../../assets/translations';

class LanguageSelector extends LitElement {
  static get styles() {
    return css`
        button {
            background: none;
            border: none;
            opacity: .4;
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
      <span>${locales.language}</span>
      ${Object.keys(countries).map(x => html`
          <button type="button" class="${x === currentCountry() ? 'active' : ''}" @click="${() => this.setLanguage(x)}">
            <img src="assets/translations/flags/${x}.png">
          </button>
      `)}
    `;
  }

  setLanguage(lang) {
    sessionStorage.setItem('language', lang);
    location.pathname = lang;
  }
}

window.customElements.define('language-selector', LanguageSelector);
