/* eslint-disable indent */
import { LitElement, html, css } from 'lit-element';
import { dateFormatter } from '../utils/functions';

class NoteCard extends LitElement {
  static get styles() {
    return [
      css`
        h3 {
          color: #00dce6;
          margin: 0;
        }

        span {
          color: grey;
          font-size: 14px;
        }
    `
    ];
  }

  static get properties() {
    return {
      info: { type: Object }
    };
  }

  formatContent(string) {
    const el = document.createElement('html');
    el.innerHTML = string;
    return html`<style>* {color: white;}</style>${el}`;
  }

  render() {
    return html`
      <h3>${this.info.title}</h3>
      <p>${this.formatContent(this.info.content)}</p>
      <span>${dateFormatter(this.info.createdAt).default} at ${dateFormatter(this.info.createdAt).hour}</span>
    `;
  }
}

window.customElements.define('note-card', NoteCard);
