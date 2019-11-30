import { LitElement, html, css } from 'lit-element';
import { CustomStyles, ViewStyle } from '../utils/custom-styles';
import { seedStyle } from 'seed-catalog/styles.js';
import { locales } from '../../assets/translations';
import 'seed-catalog/accordion.js';
import 'seed-catalog/dropdown.js';

class DependenciesView extends LitElement {
  static get styles() {
    return [
      CustomStyles,
      ViewStyle,
      seedStyle,
      css`
        :host{
          background-image: url('assets/images/backgrounds/keyboard.jpg');
        }

        h5 {
          margin-top: 50px;
        }

        p > span {
          font-weight: 800;
        }

        seed-dropdown > p {
          color: white;
        }
        
        seed-dropdown > .sd-btn-mix {
          width: 100%;
          text-align: inherit;
        }
      `
    ];
  }

  render() {
    return html`
      <section>
        <h1>${locales.home_link_dependencies}</h1>
        <hr>
        <h3>package.json</h3>
        <p>${locales.dependencies_text}</p>
        <h6 class="sm-title">Accordion example</h6>
        <seed-accordion>
          <seed-dropdown backgroundColor="rgba(0,0,0,.3)">
              <button id="lol" slot="button" class="sd-btn-mix red-mate"><i class="material-icons">keyboard_arrow_down</i>Rollup.js</button>
              <p slot="content" class="content">
                ${locales.dependencies_rollup}
                <a href="https://rollupjs.org/" target="_blank" class="sd-btn-mixr blue-mate sm">website<i class="material-icons">beenhere</i></a>
                <a href="https://www.npmjs.com/package/rollup" target="_blank" class="sd-btn purple sm">npm</a>
              </p>
          </seed-dropdown>
          <seed-dropdown backgroundColor="transparent">
              <button id="lock" slot="button" class="sd-btn-mix green-mate"><i class="material-icons">keyboard_arrow_down</i>LitElement</button>
              <p slot="content" class="content">
                ${locales.dependencies_litelement}
                <a href="https://lit-element.polymer-project.org/" target="_blank" class="sd-btn-mixr blue-mate sm">website<i class="material-icons">beenhere</i></a>
                <a href="https://www.npmjs.com/package/lit-element" target="_blank" class="sd-btn purple sm">npm</a>
              </p>
          </seed-dropdown>
          <seed-dropdown backgroundColor="transparent">
              <button id="drot" slot="button" class="sd-btn-mix green"><i class="material-icons">keyboard_arrow_down</i>Redux</button>
              <p slot="content" class="content">
                ${locales.dependencies_redux}
                <a href="https://redux.js.org/" target="_blank" class="sd-btn-mixr blue-mate sm">website<i class="material-icons">beenhere</i></a>
                <a href="https://www.npmjs.com/package/redux" target="_blank" class="sd-btn purple sm">npm</a>
              </p>
          </seed-dropdown>
          <seed-dropdown backgroundColor="transparent">
              <button id="lops" slot="button" class="sd-btn-mix black"><i class="material-icons">keyboard_arrow_down</i>Vaadin</button>
              <p slot="content" class="content">
                ${locales.dependencies_vaadin}
                <a href="https://vaadin.com/router" target="_blank" class="sd-btn-mixr blue-mate sm">website<i class="material-icons">beenhere</i></a>
                <a href="https://www.npmjs.com/package/@vaadin/router" target="_blank" class="sd-btn purple sm">npm</a>
              </p>
          </seed-dropdown>
        </seed-accordion>
      </section>
    `;
  }
}

window.customElements.define('dependencies-view', DependenciesView);
