import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { rateLimit } from 'express-rate-limit';
import resourceRoute from './routes/resource.router';
import authenticate from './middlewares/authenticate';
import error from './middlewares/error';

const app = express();
app.use(express.json());
app.use(morgan('combined'));
app.use(cors());
app.use(helmet());
app.use(rateLimit({
  windowMs: 15 * 60 * 1000,
}));

app.use(authenticate);
app.use('/resource', resourceRoute);
app.use(error.handleNotFound);
app.use(error.handleServerError);

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
