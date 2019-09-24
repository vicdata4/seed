import { LitElement, html, css } from 'lit-element';
import { CustomStyles, ViewStyle } from '../utils/custom-styles';
import { spinner } from '../utils/svg-icons';

class SeedSpinner extends LitElement {
  static get styles() {
    return [
      CustomStyles,
      ViewStyle,
      css`
        :host{
            background-image: url('assets/images/backgrounds/cloud.jpg');
        }

        h4 {
            color: white;
        }

        div {
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `
    ];
  }

  static get properties() {
    return {
      text: { type: String }
    };
  }

  constructor() {
    super();
    this.text = this.text || 'Loading..';
  }

  render() {
    return html`
        <section>
            <div>
                ${spinner}
                <h4>${this.text}</h4>
            </div>
        </section>`;
  }
}

window.customElements.define('seed-spinner', SeedSpinner);
