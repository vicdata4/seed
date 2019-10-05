import fetch, { http } from '../fetch.config';
import { url } from '../../../config.js';
import { loginValidator } from '../../utils/functions.js';

/**
  * login() function
  * @param body Contains user email and password as attributes
  *
  * loginValidator() function validates email and password values
  *
  * @dispatch LOGIN_AUTH if email and password is successfully validated and authenticated
  * @dispatch LOGIN_FAILED if some error occurred about validation or user not found
  */

export const login = (body) => {
  return async(dispatch) => {
    const { mail, password } = body;
    const validation = loginValidator(mail, password);

    if (validation === true) {
      const response = await fetch(http.post(body), `${url}/login`);
      if (!response.error) {
        dispatch({ type: 'LOGIN_AUTH', payload: response });
      } else {
        dispatch({ type: 'LOGIN_FAILED', payload: response.error });
      }
    } else {
      dispatch({ type: 'LOGIN_FAILED', payload: validation });
    }
  };
};

export const logout = () => {
  document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  window.location = '/';
};
