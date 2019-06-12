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
      `,
    ];
  }

  constructor() {
    super();  
  }

  render() {
    return html`
      <section>
        <h1>Build your first project, step by step</h1>
        <hr>
        <p>Lorem ipsum with RollUp custom configuraiton</p>
        <div>
          <a href="https://github.com/vicdata4/Roll_Lit_Redux_Seed" class="custom-link" target="_blank">github repository</a>
          <a href="/rollup" class="custom-link red" @click="${this.setActiveButton}">Quick start</a>
        </div>
      </section>
    `;
  }

  setActiveButton(e) {
    this.dispatchEvent(new CustomEvent('set-active-button', {
      bubbles: true,
      composed: true,
      detail: { path: '/rollup' },
    }));
  }
  
}

window.customElements.define('home-view', HomeView);
