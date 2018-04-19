import Router from 'next-routes';

const router = new Router();

router.add('home', '/', 'home');
router.add('contact', '/contact', 'contact');
router.add('users.index', '/users', 'users/index');
router.add('users.view', '/users/:id', 'users/user');

export const Link = router.Link;
export default router;
