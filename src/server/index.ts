import express from 'express';
import app from './app';

const server = express();

(async () => {
  await app(server);
  server.listen(8000, () => {
    console.log('Server started');
  });
})();

