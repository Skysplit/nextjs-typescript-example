import 'dotenv/config';
import registerPaths from './registerPaths';

const env = process.env.NODE_ENV || 'development';

registerPaths(env);
require('./server');
