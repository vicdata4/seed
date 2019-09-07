import { LitElement, html, css } from 'lit-element';
import { CustomStyles, ViewStyle } from '../utils/custom-styles';

class RollUpView extends LitElement {
  static get styles() {
    return [
      CustomStyles,
      ViewStyle,
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
          <h1>RollUp</h1>
          <hr>
          <h3>JavaScript module bundler</h3>
          <p>Rollup is a module bundler for JavaScript which compiles small pieces of code into something larger and more complex, such as a library or application. It uses the new standardized format for code modules included in the ES6 revision of JavaScript, instead of previous idiosyncratic solutions such as CommonJS and AMD.<br>ES modules let you freely and seamlessly combine the most useful individual functions from your favorite libraries. This will eventually be possible natively everywhere, but Rollup lets you do it today.</p>
          <p>Install with npm install --global rollup. Rollup can be used either through a command line interface with an optional configuration file, or else through its JavaScript API. Run rollup --help to see the available options and parameters.</p>
          <a href="https://rollupjs.org" target="_blank" rel="noopener" class="custom-link red">rollup.js documentation</a>
      </section>
    `;
  }
}

window.customElements.define('rollup-view', RollUpView);
