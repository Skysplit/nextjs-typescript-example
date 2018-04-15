import { Router, Request } from 'express';

interface UserRequest extends Request {
  user?: {
    id: number,
    name: string,
  };
}


const router = Router();

const users = [
  { id: 1, name: 'lorem' },
  { id: 2, name: 'ipsum' },
  { id: 3, name: 'dolor' },
];

router.param('id', (req: UserRequest, res, next, id) => {
  const user = users.find(user => user.id.toString() === id);
  req.user = user;
  next();
});

router.get('/', (req, res) => {
  res.send(users);
});

router.get('/:id', (req: UserRequest, res) => {
  if (req.user) {
    return res.send(req.user);
  }

  res.status(404).send({
    error: true,
    message: 'User not found',
  });
});


export default router;
