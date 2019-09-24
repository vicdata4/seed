import { LitElement, html, css } from 'lit-element';
import { CustomStyles, ViewStyle } from '../utils/custom-styles';
import { locales } from '../../assets/translations';
import { store } from '../store/store';
import { login } from '../store/actions/auth-actions';

class LoginForm extends LitElement {
  static get styles() {
    return [
      CustomStyles,
      ViewStyle,
      css`
        section {
          justify-content: center;
        }

        form {
          display: flex;
          flex-direction: column;
        }
      `
    ];
  }

  render() {
    return html`
      <section>
        <h2>${locales.login_title}</h2>
        <form onsubmit="return false">
          <input id="mail" type="text" placeholder="mail" required>
          <input id="password" type="password" placeholder="password" required>
          <button type="submit" @click="${this.login}" aria-label="Add note" class="custom-link blue">Login</button>
        </form>
      </section>
    `;
  }

  login() {
    const mail = this.shadowRoot.querySelector('#mail').value;
    const password = this.shadowRoot.querySelector('#password').value;
    if (mail && password) {
      store.dispatch(login({ mail, password }));
    }
  }
}

window.customElements.define('login-form', LoginForm);
