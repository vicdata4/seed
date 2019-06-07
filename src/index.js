import { Router } from '@vaadin/router';
import './app-shell';
import './views/users-view';
import './views/user-profile';
import './views/not-found';
import './components/nav-links';

const outlet = document.getElementById('root');
const router = new Router(outlet);

router.setRoutes([
  {path: '/',   component: 'app-shell'},
  {path: '/users',  component: 'users-view'},
  //{path: '/users/:id', component: 'user-profile'},
  {path: '(.*)', component: 'not-found'},
]);