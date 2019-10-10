/* eslint-disable indent */
import { LitElement, html, css } from 'lit-element';
import { CustomStyles } from '../utils/custom-styles';
import { connect } from 'pwa-helpers';
import { store } from '../store/store';
import { deleteNote } from '../store/actions/notes-actions';
import { close } from '../utils/svg-icons';
import { sortBy } from '../utils/functions';

import './note-card.js';

class NotesList extends connect(store)(LitElement) {
  static get styles() {
    return [
      CustomStyles,
      css`
        li {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 15px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.14);
        }

        ul {
          padding: 0;
        }

        button {
          padding: 0;
          background: none;
          border: none;
          margin-right: 25px;
        }

        svg {
          width: 30px;
          height: 30px;
          fill: #21bfbf;
        }
      `
    ];
  }

  static get properties() {
    return {
      books: { type: Array }
    };
  }

  constructor() {
    super();
    this.books = [];
  }

  stateChanged(state) {
    this.books = state.notes.list || [];
  }

  render() {
    return html`
      <ul>
        ${this.books.sort(sortBy).map((x, i) => {
            return html`
              <li>
                <note-card .info="${x}"></note-card>
                <button aria-label="Remove note" @click="${() => this.deleteElement(x)}">
                  ${close}
                </button>
              </li>
            `;
        })}
      </ul>
    `;
  }

  deleteElement(x) {
    store.dispatch(deleteNote(x._id));
  }
}

window.customElements.define('notes-list', NotesList);
