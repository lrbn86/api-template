import express, { Request, Response, NextFunction } from 'express';
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
app.use((req: Request, res: Response, next: NextFunction) => {
  return res.status(404).json({
    error: {
      message: 'Resource not found'
    }
  });
});
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  return res.status(500).json({
    error: {
      message: 'An unexpected error occurred. Please try again later.',
      referenceId: crypto.randomUUID()
    }
  });
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
