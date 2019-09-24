import { LitElement, html, css } from 'lit-element';
import { CustomStyles, ViewStyle } from '../utils/custom-styles';
import { store } from '../store/store';
import { logout } from '../store/actions/auth-actions';
import { addNote, getNotes } from '../store/actions/notes-actions';
import { connect } from 'pwa-helpers';
import './redux-example';

class NotesManager extends connect(store)(LitElement) {
  static get styles() {
    return [
      CustomStyles,
      ViewStyle,
      css`
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
        <h5>Notes manager</h5>
        <form onsubmit="return false">
          <input id="title" type="text" placeholder="title">
          <input id="content" type="text" placeholder="content">
          <button type="submit" @click="${this.addNote}" aria-label="Add note" class="custom-link blue">Add note</button>
        </form>
        <button type="button" @click="${() => logout()}" aria-label="Log out" class="custom-link red">Logout</button>
        <redux-example></redux-example>
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
