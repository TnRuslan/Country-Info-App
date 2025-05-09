export interface BaseResponse<T extends ICountry | ICountry[]> {
	code: number;
	data: T;
	message?: string;
}

export interface IPopulation {
	year: number;
	value: number;
}

export interface IBorderCountry {
	commonName: string;
	officialName: string;
	countryCode: string;
	region: string;
	borders: ['string'];
}

export interface ICountry {
	countryCode: string;
	name: string;
}

export interface ICountryInfo {
	countryCode: string;
	borders: IBorderCountry[];
	population: IPopulation[];
	flag: string;
}

export interface ICountryInfoBody {
	code: string;
	data: { country: string };
}
