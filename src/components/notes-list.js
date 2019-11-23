/* eslint-disable indent */
import { LitElement, html, css } from 'lit-element';
import { seedStyle } from 'seed-catalog/styles.js';
import { CustomStyles } from '../utils/custom-styles';
import { connect } from 'pwa-helpers';
import { store } from '../store/store';
import { deleteNote } from '../store/actions/notes-actions';
import { sortBy } from '../utils/functions';
import './note-card.js';

class NotesList extends connect(store)(LitElement) {
  static get styles() {
    return [
      CustomStyles,
      seedStyle,
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

        .options {
          align-self: flex-start;
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
                <div class="options">
                  <button class="sd-icon green sm circle">
                    <i class="material-icons">star</i>
                  </button>
                  <button class="sd-icon blue sm circle">
                    <i class="material-icons">edit</i>
                  </button>
                  <button class="sd-icon red circle sm" @click="${() => this.deleteElement(x)}">
                    <i class="material-icons">close</i>
                  </button>
                </div>
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
