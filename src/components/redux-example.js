import { LitElement, html, css } from 'lit-element';
import { CustomStyles } from '../utils/custom-styles';
import { connect } from 'pwa-helpers';
import { store } from '../store/store';
import { deleteNote } from '../store/actions';
import { close } from '../utils/svg-icons';

class ReduxExample extends connect(store)(LitElement) {
  static get styles() {
    return [
      CustomStyles,
      css`
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
    this.books = state || [];
  }

  sort(a, b) {
    if (a.date > b.date) return -1;
    if (a.date < b.date) return 1;
    return 0;
  }

  render() {
    return html`
     <ul>
        ${this.books.sort(this.sort).map((x, i) => { return html`<li><button aria-label="Remove note" @click="${() => this.deleteElement(x)}">${close}</button>${x.title} - ${x.content}</li>`; })}
      </ul>
    `;
  }

  deleteElement(x) {
    store.dispatch(deleteNote(x._id));
  }
}

window.customElements.define('redux-example', ReduxExample);
