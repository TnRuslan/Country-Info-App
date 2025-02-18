import CountriesService from '@/services/country.service';
import { StatusCodes } from '@/types/statusCode.type';
import { Response, Request } from 'express';

export class CountriesController {
	constructor(private countriesService: CountriesService) {}

	async getAvailableCountries(_: Request, res: Response): Promise<void> {
		const data = await this.countriesService.fetchAvailableCountries();
		res.status(StatusCodes.OK).json(data);
	}

	async getCountryInfo(req: Request, res: Response): Promise<void> {
		const countryCode = req.params.countryCode;
		const country = req.body;

		const [borders, population, flag] = await Promise.all([
			this.countriesService.fetchCountryBorders(countryCode),
			this.countriesService.fetchCountriesPopulation(country),
			this.countriesService.fetchCountiesFlag(countryCode),
		]);

		res.status(StatusCodes.OK).json({
			countryCode,
			borders,
			population,
			flag,
		});
	}
}

export const countriesController = new CountriesController(
	new CountriesService(),
);
