![](assets/logo_md.png?v=4&s=100)

Lightweight and flexible web application based on web-components.

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

Link: https://seed-19f53.web.app/

## Run project

```
git clone https://github.com/vicdata4/seed.git
```

 * Create src/store/`host.js` file to specify your `host address` as below.

```js
export default 'http://localhost:3000/notes';
```

```
npm install
```

```
npm run dev
```

## Routing

#### src/routing.js

```js
import { Router } from '@vaadin/router';

export const routing = function() {
  const outlet = this.shadowRoot.getElementById('root');
  const router = new Router(outlet);

  var routes = [
    { path: '/', component: 'home-view' },
    { path: '/vaadin', component: 'vaadin-view' },
    { path: '(.*)', component: 'not-found-view' }
  ];
};
```


## Utilities

#### `custom fetch()`

```js
// Import fetch.config file for a better performance in your requests.
import fetch, { http } from './fetch.config';

// GET example
const getDocuments = async() => {
    return fetch(http.get());
};

```
Go to [src/store/actions/notes.js](https://github.com/vicdata4/seed/blob/master) to see more examples with POST and DELETE on redux and check [src/store/fetch.config.js](https://github.com/vicdata4/seed/blob/master/src/store/fetch.config.js) file to configure your requests.

#### `dateFormatter()`

Date-formatter allows to customize your own date-formats.
As default you already have declared different types as `default`, `short` and others.

 ```js
import { dateFormatter } from 'src/utils/functions';

const date = dateFormatter(Date.now());

console.log(date.default); // "September 7, 2019"
console.log(date.short); // "Sep 7"
console.log(date.day); // "Sunday"
console.log(date.hour); // "15:53"
 ```



#### Node Server

https://github.com/vicdata4/node_server.git






