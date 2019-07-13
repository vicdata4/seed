import { LitElement, html, css } from 'lit-element';
import { CustomStyles, ViewStyle } from '../utils/custom-styles';

class HomeView extends LitElement {
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
      `
    ];
  }

  render() {
    return html`
      <section>
        <h1>SmartUp<span>Xperience</span> Offboarding project</h1>
        <hr>
        <p>Learn about RollUp, LitElement, Redux and Vaadin</p>
        <div>
          <a href="https://github.com/vicdata4/Roll_Lit_Redux_Seed" class="custom-link" target="_blank" rel="noopener">GitHub repository</a>
          <a href="/rollup" class="custom-link red" @click="${this.setActiveButton}">Quick start</a>
        </div>
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
