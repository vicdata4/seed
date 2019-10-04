import { LitElement, html, css } from 'lit-element';
import { CustomStyles, ViewStyle } from '../utils/custom-styles';
import { locales } from '../../assets/translations';
import { store } from '../store/store';
import { login } from '../store/actions/auth-actions';
import { emailValidator } from '../utils/functions.js';

class LoginForm extends LitElement {
  static get styles() {
    return [
      CustomStyles,
      ViewStyle,
      css`
        section {
          background-color: rgba(0,0,0, .6);
          justify-content: center;
        }

        h5 {
          min-height: 15px;
          text-align: end;
          color: #efa804;
        }

        h2 {
          text-align: center;
          margin-bottom: 40px;
        }
      `
    ];
  }

  static get properties() {
    return {
      alertMsg: { type: String }
    };
  }

  constructor() {
    super();
    this.alertMsg = '';
  }

  render() {
    return html`
      <section>
        <h2>${locales.login_title}</h2>
        <form
          autocomplete="off"
          name="Login"
          onsubmit="return false">
          <input type="text" id="email" placeholder="email@address.com" required>
          <input type="password" id="pass" placeholder="password" required>
          <button type="submit" @click="${this.login}" aria-label="Add note" class="custom-link form-button">Login</button>
          <h5>${this.alertMsg}</h5>
        </form>
      </section>
    `;
  }

  login() {
    const email = this.shadowRoot.querySelector('#email').value;
    const pass = this.shadowRoot.querySelector('#pass').value;

    if (email && pass) {
      if (emailValidator(email)) {
        if (pass.length > 5) {
          store.dispatch(login({ email, pass }));
          this.alertMsg = '';
        } else {
          this.alertMsg = 'Password too short';
        }
      } else {
        this.alertMsg = 'Invalid email format';
      }
    } else {
      this.alertMsg = 'Complete all fields';
    }
  }
}

window.customElements.define('login-form', LoginForm);
