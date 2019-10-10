/* eslint-disable indent */
import { LitElement, html, css } from 'lit-element';
import { dateFormatter } from '../utils/functions';

class NoteCard extends LitElement {
  static get styles() {
    return css`
        h3 {
          color: #00dce6;
        }

        span {
          color: grey;
        }
    `;
  }

  static get properties() {
    return {
      info: { type: Object }
    };
  }

  render() {
    return html`
      <h3>${this.info.title}</h3>
      <p>${this.info.content}</p>
      <span>${dateFormatter(this.info.createdAt).default}</span>
    `;
  }
}

window.customElements.define('note-card', NoteCard);
