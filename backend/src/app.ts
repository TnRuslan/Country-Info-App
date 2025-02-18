import express, { Express, Request, Response } from 'express';
import 'dotenv/config';
import bodyParser from 'body-parser';
import cors from 'cors';

import AppRouter from './routes';
import { StatusCodes } from './types/statusCode.type';

const port = process.env.PORT || 5000;
const app: Express = express();
const router = new AppRouter(app);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (_: Request, res: Response) => {
	res.send('Hello Country App!');
});

router.init();

app.use('*', (_: Request, res: Response) => {
	res.sendStatus(StatusCodes.NotFound);
});

app.listen(port, () => {
	console.log(`Now listening on port ${port}`);
});
