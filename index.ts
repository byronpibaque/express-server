import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { json } from 'body-parser';
import { routes } from './routes';


dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(json());
app.use('/',routes);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});