import { LitElement, html, css } from 'lit-element';
import { CustomStyles, ViewStyle } from '../utils/custom-styles';
import '../components/redux-example';
import { store } from '../store/store';
import { connect } from 'pwa-helpers';

import { addNote, getNotes } from '../store/actions/notes-actions';

class ReduxView extends connect(store)(LitElement) {
  static get styles() {
    return [
      CustomStyles,
      ViewStyle,
      css`
        :host{
          background-image: url('assets/images/backgrounds/keyboard.jpg');
        }

        h5 {
          margin-top: 50px;
        }
      `
    ];
  }

  render() {
    return html`
      <section>
        <h1>Redux</h1>
        <hr>
        <h3>A predictable state container for JavaScript apps.</h3>
        <p>Redux is a predictable state container for JavaScript apps.It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test. On top of that, it provides a great developer experience, such as live code editing combined with a time traveling debugger.
        You can use Redux together with React, or with any other view library. It is tiny (2kB, including dependencies), but has a large ecosystem of addons available.</p>
        <a href="https://redux.js.org/" class="custom-link red" target="_blank" rel="noopener">Learn more about Redux</a>
        <h5>Basic Redux example</h5>
        <form onsubmit="return false">
          <input id="mail" type="text" placeholder="mail">
          <input id="password" type="password" placeholder="password">
          <button type="submit" @click="${this.addNotex}" aria-label="Add note" class="custom-link blue">Add note</button>
        </form>
        <redux-example></redux-example>
      </section>
    `;
  }

  constructor() {
    super();
    store.dispatch(getNotes());
  }

  addNotex() {
    const inputTitle = this.shadowRoot.querySelector('#mail').value;
    const contentValue = this.shadowRoot.querySelector('#password').value;
    if (inputTitle && contentValue) {
      store.dispatch(addNote({ title: inputTitle, content: contentValue }));
      this.shadowRoot.querySelector('#mail').value = '';
      this.shadowRoot.querySelector('#password').value = '';
    }
  }
}

window.customElements.define('redux-view', ReduxView);
