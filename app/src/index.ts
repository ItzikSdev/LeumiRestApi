import express,{ Express, NextFunction, Request, Response }from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from 'dotenv';

import api from "./routes/api";
import errorHandler from './middleware/errorHandler';
import AppError from "./utils/appError";

dotenv.config();
const port = process.env.PORT!;

const app: Express = express();
app.use(express.json());
app.use(cors());
app.use(morgan('combined'))
app.use(errorHandler)

app.use('/api', api)

app.all("*", (req: Request, res: Response, next: NextFunction) => next(new AppError(`Cant find ${req.originalUrl} on this server `, 404)))

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
