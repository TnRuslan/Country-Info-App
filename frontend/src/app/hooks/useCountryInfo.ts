import { useMutation } from '@tanstack/react-query';
import {
	ICountryInfo,
	ICountryInfoBody,
} from '../interfaces/country.interface';
import countryService from '../services/country.service';

const fetchCountryInfo = async (
	params: ICountryInfoBody,
): Promise<ICountryInfo> => {
	const { data } = await countryService.getCountryInfo(params);
	return data;
};

export const useCountryInfo = () => {
	const data = useMutation<ICountryInfo, Error, ICountryInfoBody>({
		mutationFn: fetchCountryInfo,
	});

	return data;
};
