import { html } from 'lit-element';
import fetch, { http } from '../store/fetch.config';
import { url } from '../../config.js';

import '../components/login-form';
import '../components/notes-manager';

export const auth = async() => {
  const response = await fetch(http.get(), `${url}/auth`);

  return response && response.isLogged
    ? html`<notes-manager></notes-manager>`
    : html`<login-form></login-form>`;
};
