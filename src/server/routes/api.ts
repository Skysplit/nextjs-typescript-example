import { Router } from 'express';
import usersRouter from '@app/server/modules/users';

const router = Router();

router.use('/users', usersRouter);

export default router;
