const options = {
  mode: 'cors',
  cache: 'no-cache',
  credentials: 'same-origin',
  referrer: 'no-referrer',
  headers: {
    'Content-Type': 'application/json'
  }
};

export const get_ = () => {
  options.method = 'GET';
  return options;
};

export const post_ = (body) => {
  options.method = 'POST';
  options.body = JSON.stringify(body);
  return options;
};

export const delete_ = () => {
  options.method = 'DELETE';
  return options;
};

export const put_ = () => {
  options.method = 'PUT';
  return options;
};
