import next from 'next';
import { Application } from 'express';
import routes from './routes';
import path from 'path';

const dev = process.env.NODE_ENV !== 'production';
const dir = path.resolve(__dirname, '..');
const app = next({ dev, dir });
const handleRequest = routes.getRequestHandler(app);

export default async (server: Application) => {
  await app.prepare();
  return server.use(handleRequest);
};
