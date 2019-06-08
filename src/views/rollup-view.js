import { LitElement, html, css } from 'lit-element';
import { GlobalStyles } from '../utils/global-styles';

class RollupView extends LitElement {

  static get styles() {
    return [
      GlobalStyles,
      css`
      :host {
        background-color: purple;
      }
      `,
    ];
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <div>Users View</div>
    `;
  }
}

window.customElements.define('rollup-view', RollupView);
