import { LitElement, html, css } from 'lit-element';
import { CustomStyles, ViewStyle } from '../utils/custom-styles';

class LitElementView extends LitElement {
  static get styles() {
    return [
      CustomStyles,
      ViewStyle,
      css`
        :host{
          background-image: url('assets/images/backgrounds/cloud.jpg');
        }
      `
    ];
  }

  render() {
    return html`
      <section>
        <h1>LitElement</h1>
        <hr>
        <h3>Easily Create Fast, Lightweight Web Components</h3>
        <p>LitElement makes it easy to define Web Components – ideal for sharing elements across your organization or building a UI design system. Use your components anywhere you use HTML: in your main document, a CMS, Markdown, or a framework like React or Vue.</p>
      </section>
    `;
  }
}

window.customElements.define('litelement-view', LitElementView);
