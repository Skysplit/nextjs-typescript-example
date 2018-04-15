import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.send([
    { id: '1', name: 'test' },
  ]);
});

export default router;
