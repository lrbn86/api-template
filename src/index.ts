const environmentVars = [
  'APP_NAME', 'APP_ENV', 'APP_DEBUG',
  'HOST', 'PORT', 'JWT_SECRET',
]

for (const env of environmentVars) {
  if (!process.env[env]) throw new Error(`env: ${env} undefined`);
}

import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import { rateLimit } from 'express-rate-limit';
import morgan from 'morgan';
import resourceRoute from './routes/resource.router';
import authenticate from './middlewares/authenticate';
import error from './middlewares/error';

const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 100,
}));
app.use(morgan('combined'));

app.use(authenticate);
app.use('/resource', resourceRoute);
app.use(error.handleNotFound);
app.use(error.handleServerError);

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
