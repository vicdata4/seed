import { LitElement, html, css } from 'lit-element';
import { CustomStyles } from '../utils/custom-styles';


class ReduxView extends LitElement {

  static get styles() {
    return [
      CustomStyles,
      css`
        :host{
          background-image: url('assets/backgrounds/keyboard.jpg');
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
        <h1>Redux</h1>
        <p>A simple base class for creating fast, lightweight web components.</p>
      </section>
    `;
  }
}

window.customElements.define('redux-view', ReduxView);
