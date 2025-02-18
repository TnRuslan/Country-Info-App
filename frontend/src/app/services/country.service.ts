import { AxiosResponse } from 'axios';

import HttpServices from './http.service';
import {
	ICountry,
	ICountryInfo,
	ICountryInfoBody,
} from '../interfaces/country.interface';

class CountryService extends HttpServices {
	constructor() {
		super();
	}

	async getAvailableCountries(): Promise<AxiosResponse<ICountry[]>> {
		return this.get({ url: '' });
	}

	async getCountryInfo({
		code,
		data,
	}: ICountryInfoBody): Promise<AxiosResponse<ICountryInfo>> {
		return this.post({ url: code, data });
	}
}

const countryService = new CountryService();

export default countryService;
