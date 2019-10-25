import { LitElement, html, css } from 'lit-element';
import { CustomStyles, ViewStyle } from '../utils/custom-styles';
import { seedButtonStyle } from 'seed-catalog/styles.js';
import { locales } from '../../assets/translations';
import '../components/language-selector';

class HomeView extends LitElement {
  static get styles() {
    return [
      CustomStyles,
      ViewStyle,
      seedButtonStyle,
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
        <h1>${locales.home_title[0]} <span>${locales.home_title[1]}</span></h1>
        <h1>${locales.home_title_sub}</h1>
        <hr>
        <p>${locales.subtitle}</p>
        <div class="links">
          <a href="/dependencies" @click="${() => this.setActiveButton('/dependencies')}" class="sd-btn blue-mate" rel="noopener">Dependencies</a>
          <a href="#" class="sd-btn-mix blue" rel="noopener"><i class="material-icons">star_border</i> Catalog</a>
          <a href="#" class="sd-btn red-mate" rel="noopener">Seed Server</a>
          <a href="/application" @click="${() => this.setActiveButton('/application')}" class="sd-btn-mixr purple" rel="noopener">Auth<i class="material-icons">lock</i></a>
          <!--<a href="https://github.com/vicdata4/Roll_Lit_Redux_Seed" class="custom-link" target="_blank" rel="noopener">${locales.github}</a>
          <a href="/rollup" class="custom-link red-mate" @click="${this.setActiveButton}">${locales.quick_start}</a>-->
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
