import { Router } from '@vaadin/router';
import { countryPath, locales } from '../assets/translations';

import './views/home-view';
import './views/litelement-view';
import './views/rollup-view';
import './views/redux-view';
import './views/vaadin-view';
import './views/not-found-view';
import './views/app-view';

export const routing = function() {
  const outlet = this.shadowRoot.getElementById('root');
  const router = new Router(outlet);

  var routes = [
    { path: '/', component: 'home-view' },
    { path: '/rollup', component: 'rollup-view' },
    { path: '/redux', component: 'redux-view' },
    { path: '/litelement', component: 'litelement-view' },
    { path: '/vaadin', component: 'vaadin-view' },
    { path: '/appx', component: 'app-view' },
    { path: '(.*)', component: 'not-found-view' }
  ];

  if (countryPath) routes.unshift({ path: window.location.pathname, redirect: '/' });

  router.setRoutes(routes);
};

export const navigator = [
  {
    path: '/',
    name: locales.nav_home
  },
  {
    path: '/rollup',
    name: 'RollUp'
  },
  {
    path: '/litelement',
    name: 'Lit-Element'
  },
  {
    path: '/vaadin',
    name: 'Vaadin'
  },
  {
    path: '/redux',
    name: 'Redux'
  },
  {
    path: '/appx',
    name: 'Token-auth'
  }
];
