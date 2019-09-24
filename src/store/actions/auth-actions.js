import fetch, { http } from '../fetch.config';
import { url } from '../../../config.js';

export const login = (body) => {
  return async(dispatch) => {
    const response = await fetch(http.post(body), `${url}/login`);
    if (!response.error) {
      dispatch({ type: 'LOGIN_AUTH', payload: response });
    } else {
      dispatch({ type: 'LOGIN_FAILED', payload: response });
    }
  };
};

export const logout = () => {
  document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  window.location = '/';
};
