import express, {Request, Response} from 'express';
import {Aggregate} from './fileaggregate.class';
const app = express();
app.get('/hello', async (request: Request, response: Response) => {
  const process: Aggregate = new Aggregate();
  await process.sendData();
  response.status(200).send();
});
app.listen(4500, () => console.log('server started'));
