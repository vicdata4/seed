import { Router } from '@vaadin/router';
import { countryPath, locales } from '../assets/translations';

import './views/home-view';
import './views/catalog-view';
import './views/dependencies-view';
import './views/server-view';
import './views/not-found-view';
import './views/app-view';

export const routing = function() {
  const outlet = this.shadowRoot.getElementById('root');
  const router = new Router(outlet);

  var routes = [
    { path: '/', component: 'home-view' },
    { path: '/catalog', component: 'catalog-view' },
    { path: '/dependencies', component: 'dependencies-view' },
    { path: '/server', component: 'server-view' },
    { path: '/application', component: 'app-view' },
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
    path: '/catalog',
    name: 'Catalog'
  },
  {
    path: '/server',
    name: 'Server'
  },
  {
    path: '/dependencies',
    name: 'Dependencies'
  },
  {
    path: '/application',
    name: 'Auth'
  }
];
