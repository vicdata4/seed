import { LitElement, html, css } from 'lit-element';
import { CustomStyles, ViewStyle } from '../utils/custom-styles';
import { seedStyle } from 'seed-catalog/styles.js';
import { locales } from '../../assets/translations';
import '../components/language-selector';

class HomeView extends LitElement {
  static get styles() {
    return [
      CustomStyles,
      ViewStyle,
      seedStyle,
      css`
        :host{
          background-image: url('assets/images/backgrounds/lamp.jpg');
        }

        p {
          margin-top: 0;
        }

        .links {
          display: flex;
          flex-flow: wrap;
        }

        .links > a {
          margin-right: 7px;
          margin-bottom: 7px;
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
        <h1>
          ${locales.home_title[0]}
          <span>${locales.home_title[1]}</span>
        </h1>
        <h1>${locales.home_title_sub}</h1>
        <hr>
        <p>${locales.subtitle}</p>
        <div class="links">
          <a href="https://github.com/vicdata4/seed"
             class="sd-btn-mix blue-mate"
             @click="${() => this.setActiveButton('/dependencies')}"
             rel="noopener">
             <i class="material-icons">cloud_queue</i>Github
          </a>
          <a href="/catalog"
             class="sd-btn-mixr blue"
             @click="${() => this.setActiveButton('/catalog')}"
             rel="noopener">
             ${locales.home_link_catalog}<i class="material-icons">import_contacts</i>
          </a>
          <a href="/application"
             class="sd-btn red-mate"
             @click="${() => this.setActiveButton('/application')}"
             rel="noopener">
             ${locales.home_link_auth}
          </a>
          <a href="/community"
             class="sd-btn purple"
             @click="${() => this.setActiveButton('/community')}"
             rel="noopener">
             ${locales.community_title}
          </a>
        </div>
        <language-selector></language-selector>
      </section>
    `;
  }

  setActiveButton(path) {
    this.dispatchEvent(new CustomEvent('set-active-button', {
      bubbles: true,
      composed: true,
      detail: { path }
    }));
  }
}

window.customElements.define('home-view', HomeView);
