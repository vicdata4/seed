![](assets/logo_md.png?v=4&s=100)

Seed is a Web-Components based project, which follows to build a lightweight seed, flexible and scalable for web applications.


Dependencies:
- [Rollup.js](https://rollupjs.org) Module bundler
- [LitElement](https://lit-element.polymer-project.org) WebComponents
- [Redux](https://redux.js.org) Store
- [Vaadin](https://www.npmjs.com/package/@vaadin/router) Routing
- [ESLint](https://eslint.org) Coding style

Link: https://seed-19f53.web.app/

## Project installation

`git clone https://github.com/vicdata4/seed-project.git`

`npm install`

`npm run dev`

## Host configuration:

Create `host.js` file to specify your host address.
```js
// Add next line in your host.js file: 
export default 'http://<host>:<port>/notes';
```


## Seed Utilities

#### `custom fetch()`

```js
// Import fetch.config file for a better performance in your requests.
import fetch, { http } from './fetch.config';
import url from './host.js';

// examples GET, POST, DELETE
const response = await fetch(http.get());
const response = await fetch(http.post(body));
const response = await fetch(http.delete(), url);

```

Check `src/store/fetch.config.js` file to configure your requests.

#### `dateFormatter()`

Date-formatter allows to customize your own date-formats.
As default you already have declared different types as `default`, `short` and others.

 ```js
import { dateFormatter } from 'src/utils/functions';

const date = dateFormatter(Date.now);

// Outputs
date.default; // "September 7, 2019"
date.short; // "Sep 7"
date.day; // "Sunday"
date.hour; // "15:53"
 ```



#### Node Server

https://github.com/vicdata4/node_server.git






