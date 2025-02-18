import axios, { Axios } from 'axios';

const DATE_NAGER_API = 'https://date.nager.at/api/v3';
const COUNTRIES_NOW_API = 'https://countriesnow.space/api/v0.1/countries';

export default class CountriesService {
	private dateNagerApi: Axios;
	private countriesNowApi: Axios;

	constructor() {
		this.dateNagerApi = axios.create({
			baseURL: DATE_NAGER_API,
		});

		this.countriesNowApi = axios.create({
			baseURL: COUNTRIES_NOW_API,
		});
	}
	async fetchAvailableCountries() {
		const { data } = await this.dateNagerApi.get('/AvailableCountries');
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
