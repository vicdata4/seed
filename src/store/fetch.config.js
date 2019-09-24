import { url, prefix } from '../../config.js';

export default async(type, url_ = url) => {
  try {
    return await fetch(url_, type)
      .then(errorHandler)
      .then(response => { return response; })
      .catch(error => { return { error }; });
  } catch (error) {
    return { error };
  }
};

const errorHandler = (response) => {
  if (!response.ok) {
    return { error: response.statusText, errorCode: response.status };
  }
  return response.json();
};

export const http = {
  get: () => Object.assign(options, { method: 'GET', body: undefined }),
  post: (body) => Object.assign(options, { method: 'POST', body: JSON.stringify(body) }),
  delete: () => Object.assign(options, { method: 'DELETE', body: undefined }),
  put: (body) => Object.assign(options, { method: 'PUT', body: JSON.stringify(body) })
};

const getCookie = (name) => {
  const matches = document.cookie.match(new RegExp(
    '(?:^|; )' + name.replace(/([.$?*|{}()[\]\\/+^])/g, '\\$1') + '=([^;]*)'
  ));

  return matches && matches !== 'null' ? decodeURIComponent(matches[1]) : undefined;
};

const options = {
  mode: 'cors',
  cache: 'no-cache',
  credentials: 'same-origin',
  referrer: 'no-referrer',
  headers: new Headers({
    'Content-Type': 'application/json',
    authorization: getCookie('token') ? prefix + getCookie('token') : undefined
  })
};
