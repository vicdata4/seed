import fetch, { http } from '../store/fetch.config';
import { url } from '../../config.js';

export const auth = async() => {
  const response = await fetch(http.get(), `${url}/auth`);
  return response && response.isLogged;
};
