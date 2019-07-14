import { LitElement, html, css } from 'lit-element';
import { countries } from '../../assets/translations';

class LanguageSelector extends LitElement {
  static get styles() {
    return css`
        button {
            background: none;
            border: none;
            cursor: pointer;
        }

        img {
            width: 30px;
            height: 30px;
        }
      `;
  }

  render() {
    return html`
        ${Object.keys(countries).map(x => html`
            <button type="button" @click="${() => this.setLanguage(x)}">
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
