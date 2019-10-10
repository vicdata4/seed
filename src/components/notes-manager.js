import { LitElement, html, css } from 'lit-element';
import { ViewStyle } from '../utils/custom-styles';
import { store } from '../store/store';
import { logout } from '../store/actions/auth-actions';
import { addNote, getNotes } from '../store/actions/notes-actions';
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
          padding: 50px;
          padding-bottom: 0;
        }

        textarea {
          width: 100%;
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
        }

        input[type='submit'] {
          float: right;
        }

        .submit-btn {
          background-color: #16799e;
          border-radius: 5px;
          height: 30px;
          border: none;
          color: white;
        }

        h5 {
          margin-top: 50px;
        }
      `
    ];
  }

  constructor() {
    super();
    store.dispatch(getNotes());
  }

  render() {
    return html`
      <section>
        <form onsubmit="return false">
          <input id="title" type="text" placeholder="title">
          <textarea id="content" style="height: 200px;" type="text" placeholder="content"></textarea>
          <input type="submit" value="Add note" @click="${this.addNote}" class="submit-btn" aria-label="Add note">
        </form>
        <!--<button type="button" @click="${() => logout()}" aria-label="Log out" class="red">Logout</button>-->
        <notes-list></notes-list>
      </section>
    `;
  }

  addNote() {
    const inputTitle = this.shadowRoot.querySelector('#title').value;
    const contentValue = this.shadowRoot.querySelector('#content').value;
    if (inputTitle && contentValue) {
      store.dispatch(addNote({ title: inputTitle, content: contentValue }));
      this.shadowRoot.querySelector('#title').value = '';
      this.shadowRoot.querySelector('#content').value = '';
    }
  }
}

window.customElements.define('notes-manager', NotesManager);
