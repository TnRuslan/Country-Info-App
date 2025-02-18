import { Application } from 'express';
import countriesRouter from './countries';

class AppRouter {
	constructor(private app: Application) {}

	init(): void {
		this.app.get('/', (_req, res) => {
			res.send('API Running');
		});
		this.app.use('/api/countries', countriesRouter);
	}
}

export default AppRouter;
