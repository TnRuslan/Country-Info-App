import { countriesController } from '@/controllers/country.controller';
import { tryCatchWrapper } from '@/middleware/tryCatch.middleware';
import { validateBody } from '@/middleware/validation.middleware';
import { countrySchema } from '@/validation/country.schema';
import { Router } from 'express';

const countriesRouter = Router();

countriesRouter.get(
	'/',
	tryCatchWrapper(
		countriesController.getAvailableCountries.bind(countriesController),
	),
);

countriesRouter.post(
	'/:countryCode',
	validateBody(countrySchema),
	tryCatchWrapper(
		countriesController.getCountryInfo.bind(countriesController),
	),
);

export default countriesRouter;
