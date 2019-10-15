import { LitElement, html, css } from 'lit-element';
import { CustomStyles, ViewStyle } from '../utils/custom-styles';
import { seedButtonStyle } from 'seed-catalog/styles.js';

class CatalogView extends LitElement {
  static get styles() {
    return [
      CustomStyles,
      ViewStyle,
      seedButtonStyle,
      css`
        :host {
          background-image: url('assets/images/backgrounds/keyboard.jpg');
        }
      `
    ];
  }

  render() {
    return html`
      <section>
          <h1>Seed catalog</h1>
          <hr>
          <h3>Web components catalog</h3>
          <p>Seed-catalog is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS- and (optionally) JavaScript-based design templates for typography, forms, buttons, navigation and other interface components.</p>
          <p>Seed-catalog can be used either through a command line interface with an optional configuration file, or else through its JavaScript API. Run rollup --help to see the available options and parameters.</p>
          <a href="https://rollupjs.org" target="_blank" rel="noopener" class="custom-link">Login</a>
      </section>
    `;
  }
}

window.customElements.define('catalog-view', CatalogView);
