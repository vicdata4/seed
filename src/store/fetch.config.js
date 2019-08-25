
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

export const url = 'http://localhost:3000/notes';

const options = {
  mode: 'cors',
  cache: 'no-cache',
  credentials: 'same-origin',
  referrer: 'no-referrer',
  headers: {
    'Content-Type': 'application/json'
  }
};

export const del = () => Object.assign(options, { method: 'DELETE', body: undefined });
export const get = () => Object.assign(options, { method: 'GET', body: undefined });
export const post = (body) => Object.assign(options, { method: 'POST', body: JSON.stringify(body) });
