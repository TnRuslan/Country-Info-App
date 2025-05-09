import LinkItem from './LinkItem';
import { ICountry } from '../interfaces/country.interface';

export default async function CountryList() {
	const response = await fetch('http://localhost:5000/api/countries');

	if (!response.ok) {
		throw new Error('Failed to fetch countries');
	}

	const countries = (await response.json()) as ICountry[];

	return (
		<ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 bg-gray-800 rounded-lg p-6">
			{countries?.map((country) => (
				<li key={country.countryCode}>
					<LinkItem
						href={`/countries/${country.countryCode}/${country.name}`}
						text={country.name}
					/>
				</li>
			))}
		</ul>
	);
}
