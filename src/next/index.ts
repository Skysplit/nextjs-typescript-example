import next from 'next';
import path from 'path';

import routes from './routes';

const dev = process.env.NODE_ENV !== 'production';
const dir = path.resolve(__dirname, '..', 'client');
const app = next({ dev, dir });
const handleRequest = routes.getRequestHandler(app);

export default async () => {
  await app.prepare();
  return handleRequest;
};
