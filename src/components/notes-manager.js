import { LitElement, html, css } from 'lit-element';
import { ViewStyle } from '../utils/custom-styles';
import { store } from '../store/store';
import { addNote, getNotes } from '../store/actions/notes-actions';
import { textAreaFormatter } from '../utils/functions.js';
import { connect } from 'pwa-helpers';
import './notes-list.js';

class NotesManager extends connect(store)(LitElement) {
  static get styles() {
    return [
      ViewStyle,
      css`
        section {
          justify-content: normal;
          padding: 0;
        }

        form {
          display: flex;
          flex-direction: column;
          width: 100%;
          padding: 0;
          margin: 0;
        }

        textarea {
          resize: none;
        }

        input, textarea {
          margin-bottom: 15px;
        }

        input[type='text'], textarea {
          background-color: rgba(0,0,0,.6);
          height: 30px;
          border: none;
          padding: 5px;
          color: white;
          font-size:20px;
          padding: 10px;
          margin: 0;
          
        }

        input[type='submit'] {
          float: right;
        }

        input:first-of-type {
          border-bottom: 1px solid rgba(255,255,255, .16);
          height: 40px;
        }

        .submit-btn {
          background-color: rgb(111, 102, 71);
          font-size: 15px;
          height: 40px;
          border: none;
          color: white;
          width: 100%;
        }

        h5 {
          margin-top: 50px;
        }

        .alert {
          color: #cab72b;
          text-align: right;
          padding-right: 10px;
        }
      `
    ];
  }

  static get properties() {
    return {
      alert: { type: String, attribute: false }
    };
  }

  constructor() {
    super();
    this.alert = '';
    store.dispatch(getNotes());
  }

  render() {
    return html`
      <section>
        <form
          autocomplete="off"
          name="Notes"
          onsubmit="return false">
          <input id="title" type="text" placeholder="title">
          <textarea id="content" style="height: 200px;" type="text" placeholder="content"></textarea>
          <input type="submit" value="Add note" @click="${this.addNote}" class="submit-btn" aria-label="Add note">
        </form>
        <span class="alert">${this.alert}</span>
        <notes-list></notes-list>
      </section>
    `;
  }

  addNote() {
    const inputTitle = this.shadowRoot.querySelector('#title').value;
    const contentValue = this.shadowRoot.querySelector('#content').value;

    if (inputTitle && contentValue) {
      store.dispatch(addNote({ title: inputTitle, content: textAreaFormatter(contentValue) }));
      this.shadowRoot.querySelector('#title').value = '';
      this.shadowRoot.querySelector('#content').value = '';
      this.alert = '';
    } else {
      this.alert = 'Rellena todos los campos';
    }
  }
}

window.customElements.define('notes-manager', NotesManager);
