import { LitElement, html, css } from 'lit-element';
import { CustomStyles, ViewStyle } from '../utils/custom-styles';
import { connect } from 'pwa-helpers';
import { store } from '../store/store';
import { deleteNote } from '../store/actions';
import { close } from '../utils/svg-icons';

class ReduxExample extends connect(store)(LitElement) {

  static get styles() {
    return [
      CustomStyles,
      css`
        :host{
        }

        li {
          display: flex;
          align-items: center;
          padding: 15px;
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
      `,
    ];
  }

  static get properties() {
      return {
      books: { type: Array }
    }
  }

  constructor() {
    super();
    this.books = [];
  }

  firstUpdated(){
  }

  stateChanged(state) {
    this.books = state;
  }
  
  render() {
    return html`
     <ul>
        ${this.books.map((x, i) => { return html`<li><button @click="${() => this.deleteElement(i)}">${close}</button>${x}</li>`; })}
      </ul>
    `;
  }

  deleteElement(i){
    store.dispatch(deleteNote(i));
  }
}

window.customElements.define('redux-example', ReduxExample);