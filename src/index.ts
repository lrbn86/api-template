import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import jwt from 'jsonwebtoken';
import bcryptjs from 'bcryptjs';
import { rateLimit } from 'express-rate-limit';
import resourceRoute from './routes/resourceRouter';

const app = express();
app.use(express.json());
app.use(morgan('combined'));
app.use(cors());
app.use(helmet());
app.use(rateLimit({ windowMs: 10 * 60 * 1000, limit: 100 }));

app.use('/resource', resourceRoute);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
