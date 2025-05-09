import axios, { Axios } from 'axios';

export default class CountriesService {
	private dateNagerApi: Axios;
	private countriesNowApi: Axios;

	constructor() {
		this.dateNagerApi = axios.create({
			baseURL: process.env.DATE_NAGER_API,
		});

		this.countriesNowApi = axios.create({
			baseURL: process.env.COUNTRIES_NOW_API,
		});
	}
	async fetchAvailableCountries() {
		const { data } = await this.dateNagerApi.get('/AvailableCountries');
		await new Promise((resolve) => setTimeout(resolve, 1000));
		return data;
	}

	async fetchCountryBorders(countryCode: string) {
		const { data } = await this.dateNagerApi.get(
			`/CountryInfo/${countryCode}`,
		);
		return data.borders;
	}

	async fetchCountriesPopulation(country: string) {
		const { data } = await this.countriesNowApi.post(
			'/population',
			country,
		);

		return data.data.populationCounts;
	}

	async fetchCountiesFlag(countryCode: string) {
		const { data } = await this.countriesNowApi.post('/flag/images', {
			iso2: countryCode,
		});

		return data.data.flag;
	}
}
