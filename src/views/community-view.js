import { LitElement, html, css } from 'lit-element';
import { CustomStyles, ViewStyle } from '../utils/custom-styles';
import { seedStyle } from 'seed-catalog/styles.js';
import { locales } from '../../assets/translations';

class CommunityView extends LitElement {
  static get styles() {
    return [
      CustomStyles,
      ViewStyle,
      seedStyle,
      css`
        :host{
          background-image: url('assets/images/backgrounds/keyboard.jpg');
        }

        .logo {
          width: 80px;
          height: auto;
          margin-right: 25px;
        }

        .container {
          display: flex;
          flex-flow: row nowrap;
          margin-bottom: 40px;
        }

        a {
          text-decoration: none;
        }

        h4 {
          margin: 0;
        }
      `
    ];
  }

  render() {
    return html`
      <section>
        <h1>${locales.community_title}</h1>
        <hr>
        <div class="container">
          <img class="logo" src="assets/images/github_white.png" alt="github">
          <div>
            <h4>Github</h4>
            <a href="https://github.com/" class="sm-title">https://github.com/</a>
          </div>
        </div>
        <div class="container">
          <img class="logo" src="assets/images/opensource.jpg" alt="opensource">
          <div>
            <h4>Open source</h4>
            <a href="https://opensource.org/community" class="sm-title">https://opensource.org/community</a>
          </div>
        </div>
        <div class="container">
          <img class="logo" src="assets/images/polymer.png" alt="polymer">
          <div>
            <h4>Polymer Project</h4>
            <a href="https://www.polymer-project.org/blog/" class="sm-title">https://www.polymer-project.org/blog/</a>
          </div>
        </div>
        <div class="container">
          <img class="logo" src="assets/images/mdn.png" alt="mdn">
          <div>
            <h4>Mozilla</h4>
            <a href="https://developer.mozilla.org/" class="sm-title">https://developer.mozilla.org/</a>
          </div>
        </div>
      </section>
    `;
  }
}

window.customElements.define('community-view', CommunityView);
