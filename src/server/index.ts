import app from './app';
import nextApp from '@app/next';

(async () => {
  const handleRequest = await nextApp();
  app.use(handleRequest);

  app.listen(8000, () => {
    console.log('Server started on port 8000');
  });
})();

