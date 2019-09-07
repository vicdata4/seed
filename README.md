![](assets/logo_md.png?v=4&s=100)

Seed is a Web-Components based project, which follows to build a lightweight seed, flexible and scalable for web applications.

### tree

_____  [assets](https://github.com/vicdata4/seed-project/tree/master/assets)\
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
|____  [images]()\
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
|____ [backgrounds]()\
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
|____  [translations](https://github.com/vicdata4/seed-project/tree/master/assets/translations)\
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
|____ [flags](https://github.com/vicdata4/seed-project/tree/master/assets/translations/flags)\
|____ [build](https://github.com/vicdata4/seed-project)\
|____ [node_modules](https://github.com/vicdata4/seed-project)\
|____ [scripts](https://github.com/vicdata4/seed-project/tree/master/scripts)\
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
|____  [utils](https://github.com/vicdata4/seed-project/tree/master/scripts/utils)\
|____ [src](https://github.com/vicdata4/seed-project/tree/master/src)\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
|____  [components](https://github.com/vicdata4/seed-project/tree/master/src/components)\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
|____ [store](https://github.com/vicdata4/seed-project/tree/master/src/store)\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
|____ [actions](https://github.com/vicdata4/seed-project)\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
|____ [reducers](https://github.com/vicdata4/seed-project)\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
|____ [utils](https://github.com/vicdata4/seed-project/tree/master/src/utils)\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
|____ [views](https://github.com/vicdata4/seed-project/tree/master/src/views)

## Dependencies:
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

Create `src/store/host.js` file to specify your host address.
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

const date = dateFormatter(Date.now());

console.log(date.default); // "September 7, 2019"
console.log(date.short); // "Sep 7"
console.log(date.day); // "Sunday"
console.log(date.hour); // "15:53"
 ```



#### Node Server

https://github.com/vicdata4/node_server.git






