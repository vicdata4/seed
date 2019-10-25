![](assets/logo_md.png?v=4&s=100)

Lightweight web application based on web-components.

### folder tree

____ [assets](https://github.com/vicdata4/seed-project/tree/master/assets)\
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
|___  [images](https://github.com/vicdata4/seed-project/tree/master/assets/images)\
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
|___ [backgrounds](https://github.com/vicdata4/seed-project/tree/master/assets/images/backgrounds)\
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
|___  [translations](https://github.com/vicdata4/seed-project/tree/master/assets/translations)\
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
|___ [flags](https://github.com/vicdata4/seed-project/tree/master/assets/translations/flags)\
|___ [scripts](https://github.com/vicdata4/seed-project/tree/master/scripts)\
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
|___  [utils](https://github.com/vicdata4/seed-project/tree/master/scripts/utils)\
|___ [src](https://github.com/vicdata4/seed-project/tree/master/src)\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
|___  [components](https://github.com/vicdata4/seed-project/tree/master/src/components)\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
|___  [middleware](https://github.com/vicdata4/seed/tree/master/src/middleware)\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
|___ [store](https://github.com/vicdata4/seed-project/tree/master/src/store)\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
|___ [actions](https://github.com/vicdata4/seed-project/tree/master/src/store/actions)\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
|___ [reducers](https://github.com/vicdata4/seed-project/tree/master/src/store/reducers)\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
|___ [utils](https://github.com/vicdata4/seed-project/tree/master/src/utils)\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
|___ [views](https://github.com/vicdata4/seed-project/tree/master/src/views)

## Dependencies:
- [Rollup.js](https://rollupjs.org) Module bundler
- [LitElement](https://lit-element.polymer-project.org) WebComponents
- [Redux](https://redux.js.org) Store
- [Vaadin](https://www.npmjs.com/package/@vaadin/router) Routing
- [ESLint](https://eslint.org) Coding style

Link: https://seed-project.dev/

## Run project

```
git clone https://github.com/vicdata4/seed.git
```

 * Create `config.js` file from root to specify your `host address` and `token prefix` as below.

```js
export const prefix = 'prefix-string';
export const url = 'http://your-host-address';
```

```
npm install
```

```
npm run dev
```

## Index

[· Routing configuration](#routing)

[· Redux actions](#redux-actions)

[· Translations](#translations)

[· Utils](#utils)

[· Utils dateFormatter()](#dateFormatter)

[· Utils fetch()](#fetch)

[· Utils validators](#validation)

## Routing

#### [src/routing.js](https://github.com/vicdata4/seed/blob/master/src/routing.js)

```js
import { Router } from '@vaadin/router';
import './views/home-view';
import './views/vaadin-view';
import './views/not-found-view';

export const routing = function() {
  const outlet = this.shadowRoot.getElementById('root');
  const router = new Router(outlet);

  var routes = [
    { path: '/', component: 'home-view' },
    { path: '/vaadin', component: 'vaadin-view' },
    { path: '(.*)', component: 'not-found-view' }
    // ...
  ];
};
```


## Redux Actions

#### [src/store/actions/notes-actions.js](https://github.com/vicdata4/seed/blob/master/src/store/actions/notes-actions.js)

```js
// Import fetch.config file to improve your performance.

import fetch, { http } from '../fetch.config';

export const addNote = (body) => {
  return async(dispatch) => {
    const response = await fetch(http.post(body));
    if (!response.error) {
      dispatch({ type: 'ADD_NOTE', payload: response });
    } else {
      dispatch({ type: 'CATCH_ERROR', payload: response });
    }
  };
};
```

Go to [src/store/actions/notes-actions.js](https://github.com/vicdata4/seed/blob/master/src/store/actions/notes-actions.js) to see more examples with GET and DELETE on redux and check [src/store/fetch.config.js](https://github.com/vicdata4/seed/blob/master/src/store/fetch.config.js) file to configure your fetch options.

## Translations

#### Config file: [assets/translations/index.js](https://github.com/vicdata4/seed/blob/master/assets/translations/index.js)

 ```js
 // how tu use

import { locales } from 'assets/translations';

<div>
  <h1>${locales.home_title}</h1>
  <h3>${locales.home_title_sub}</h3>
  <p>${locales.content}</p>
</div>
 ```

## Utils

#### `dateFormatter()` 
#### [src/utils/functions.js](https://github.com/vicdata4/seed/blob/master/src/utils/functions.js)

Date-formatter allows to customize your own date-formats.
By default some presets are already defined such as `default`, `short` and others.

#### How to use

 ```js
import { dateFormatter } from 'src/utils/functions';

const date = dateFormatter(Date.now());

console.log(date.default); // "September 7, 2019"
console.log(date.short); // "Sep 7"
console.log(date.day); // "Sunday"
console.log(date.hour); // "15:53"
 ```

#### `fetch()` 
#### [src/store/fetch.config.js](https://github.com/vicdata4/seed/blob/master/src/store/fetch.config.js)
Configure your fetch options and error codes from `fetch.config.js` file.


```js
// Import fetch.config file to improve your performance.

import fetch, { http } from 'src/store/fetch.config';
import { url } from 'config.js';

const body = {};

// get request 
const getExample = await fetch(http.get());
// get request - optional param (api path)
const getExample = await fetch(http.get(), `${url}/notes`);

const postExample = await fetch(http.post(body));
const deleteExample = await fetch(http.delete());
```

## Validation

#### [src/utils/functions.js](https://github.com/vicdata4/seed/blob/master/src/utils/functions.js)

#### `loginValidator()` 
#### `emailValidator()` 


#### Node Server

https://github.com/vicdata4/seed-server.git






