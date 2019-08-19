import { LitElement, html, css } from 'lit-element';
import { CustomStyles, ViewStyle } from '../utils/custom-styles';
import '../components/redux-example';
import { store } from '../store/store';
import { connect } from 'pwa-helpers';

import { addNote } from '../store/actions';

class ReduxView extends connect(store)(LitElement) {
  static get styles() {
    return [
      CustomStyles,
      ViewStyle,
      css`
        :host{
          background-image: url('assets/backgrounds/keyboard.jpg');
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
        <form id="my-form" onsubmit="${this.setForm}">
          <input type="text" placeholder="write a note..">
          <button @click="${this.updateStore}" aria-label="Add note" class="custom-link blue">Add note</button>
        </form>
        <button @click="${this.addNotex}" class="custom-link blue">Http Post</button>
        <redux-example></redux-example>
      </section>
    `;
  }

  constructor() {
    super();
    const url = 'http://localhost:3000/notes';
    fetch(url, {
      method: 'GET', // or 'PUT'
      mode: 'cors', // no-cors, cors, *same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      // redirect: 'follow', // manual, *follow, error
      referrer: 'no-referrer', // no-referrer, *client
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .then(response => console.log('Success:', JSON.stringify(response)))
      .catch(error => console.error('Error:', error));
  }


  submit() {
    console.log('lang****');
  }

  updateStore() {
    const inputValue = this.shadowRoot.querySelector('input').value;

    if (inputValue) store.dispatch(addNote(inputValue));
  }

  addNotex() {
    const url = 'http://localhost:3000/notes';
    const data = { title: 'DOTVV', content: 'this is LUPA' };

    fetch(url, {
      method: 'POST', // or 'PUT'
      mode: 'cors', // no-cors, cors, *same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      // redirect: 'follow', // manual, *follow, error
      referrer: 'no-referrer', // no-referrer, *client
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .then(response => console.log('Success:', JSON.stringify(response)))
      .catch(error => console.error('Error:', error));
  }
}

window.customElements.define('redux-view', ReduxView);