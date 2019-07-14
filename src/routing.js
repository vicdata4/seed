import { Router } from '@vaadin/router';
import { countryPath } from '../assets/translations';

export const routing = function() {
  const outlet = this.shadowRoot.getElementById('root');
  const router = new Router(outlet);

  var routes = [
    { path: '/', component: 'home-view' },
    { path: '/rollup', component: 'rollup-view' },
    { path: '/redux', component: 'redux-view' },
    { path: '/litelement', component: 'litelement-view' },
    { path: '/vaadin', component: 'vaadin-view' },
    { path: '(.*)', component: 'not-found-view' }
  ];

  if (countryPath) routes.unshift({ path: window.location.pathname, redirect: '/' });

  router.setRoutes(routes);
};

export const navigator = [{
  path: '/',
  name: 'Home'
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
}
];
