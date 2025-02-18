import LinkItem from './LinkItem';
import { ICountry } from '../interfaces/country.interface';

interface CountryListProps {
	data: ICountry[];
}

export default function CountryList({
	data,
}: CountryListProps): React.ReactNode {
	return (
		<ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 bg-gray-800 rounded-lg p-6">
			{data?.map((country) => (
				<li key={country.countryCode}>
					<LinkItem
						href={`/countries/${country.countryCode}?name=${country.name}`}
						text={country.name}
					/>
				</li>
			))}
		</ul>
	);
}
