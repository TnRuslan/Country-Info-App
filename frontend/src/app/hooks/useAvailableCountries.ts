import { useQuery } from '@tanstack/react-query';
import countryService from '../services/country.service';
import { ICountry } from '../interfaces/country.interface';

const fetchAvailableCountries = async (): Promise<ICountry[]> => {
	const { data } = await countryService.getAvailableCountries();
	return data;
};

export const useAvailableCountries = () => {
	const data = useQuery<ICountry[]>({
		queryKey: ['availableCountries'],
		queryFn: fetchAvailableCountries,
		initialData: [],
	});

	return data;
};
