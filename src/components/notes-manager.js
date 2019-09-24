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
        :host{
          background-image: url('assets/images/backgrounds/cloud.jpg');
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
        <h5>Notes manager</h5>
        <form onsubmit="return false">
          <input id="mail" type="text" placeholder="mail">
          <input id="password" type="password" placeholder="password">
          <button type="submit" @click="${this.addNote}" aria-label="Add note" class="custom-link blue">Add note</button>
        </form>
        <button type="button" @click="${() => logout()}" aria-label="Log out" class="custom-link red">Logout</button>
        <redux-example></redux-example>
      </section>
    `;
  }

  addNote() {
    const inputTitle = this.shadowRoot.querySelector('#mail').value;
    const contentValue = this.shadowRoot.querySelector('#password').value;
    if (inputTitle && contentValue) {
      store.dispatch(addNote({ title: inputTitle, content: contentValue }));
      this.shadowRoot.querySelector('#mail').value = '';
      this.shadowRoot.querySelector('#password').value = '';
    }
  }
}

window.customElements.define('notes-manager', NotesManager);
