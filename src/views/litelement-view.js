import { LitElement, html, css } from 'lit-element';
import { CustomStyles } from '../utils/custom-styles';


class LitElementView extends LitElement {

  static get styles() {
    return [
      CustomStyles,
      css`
        :host{
          background-image: url('assets/mac.jpg');
          background-size: cover;
        }
      `,
    ];
  }

  constructor() {
    super();  
  }

  render() {
    return html`
      <div>
        <h1>LitElement</h1>
        <p>Lorem ipsum with RollUp custom configuraiton, LitElement library, Vaadin Routing and Redux</p>
      </div>
    `;
  }
}

window.customElements.define('litelement-view', LitElementView);
