import { Router } from '@vaadin/router';

export const routing = function() {
    const outlet = this.shadowRoot.getElementById('root');
    const router = new Router(outlet);

    router.setRoutes([
        {path: '/',   component: 'home-view'},
        {path: '/rollup',  component: 'rollup-view'},
        {path: '/redux',  component: 'redux-view'},
        {path: '/litelement',  component: 'litelement-view'},
        {path: '/vaadin',  component: 'vaadin-view'},
        {path: '(.*)', component: 'not-found-view'},
    ]);
};

export const navigator = [
    {
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
    },
];