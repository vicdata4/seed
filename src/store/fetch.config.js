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

const errorHandler = (response) => {
  if (!response.ok) {
    return { error: response.statusText, errorCode: response.status };
  }
  return response.json();
};

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

export const get = () => {
  options.method = 'GET';
  return options;
};

export const post = (body) => {
  options.method = 'POST';
  options.body = JSON.stringify(body);
  return options;
};

export const del = () => {
  options.method = 'DELETE';
  return options;
};

export const put = () => {
  options.method = 'PUT';
  return options;
};
