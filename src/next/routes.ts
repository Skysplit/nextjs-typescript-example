import Routes from 'next-routes';

const routes = new Routes();
const { Link } = routes;

routes.add('home', '/', 'home');
routes.add('contact', '/contact', 'contact');
routes.add('users.index', '/users', 'users/index');
routes.add('users.view', '/users/:id', 'users/user');

export default routes;
export { Link };
