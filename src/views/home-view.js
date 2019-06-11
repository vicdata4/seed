import { LitElement, html, css } from 'lit-element';
import { CustomStyles } from '../utils/custom-styles';

class HomeView extends LitElement {

  static get styles() {
    return [
      CustomStyles,
      css`
        :host{
          background-image: url('assets/backgrounds/wall.jpg');
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
        <p>Lorem ipsum with RollUp custom configuraiton</p>
        <a href="/rollup" class="custom-link" @click="${this.setActiveButton}">Quick start</a>
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
