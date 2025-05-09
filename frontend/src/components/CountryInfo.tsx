import Image from 'next/image';
import { IBorderCountry, ICountryInfo } from '@/interfaces/country.interface';
import LinkItem from './LinkItem';
import PopulationChart from './PopulationChart';

export default async function CountryInfo({
	code,
	name,
}: {
	code: string;
	name: string;
}) {
	const response = await fetch(
		`http://localhost:5000/api/countries/${code}`,
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				country: name,
			}),
		},
	);

	if (!response.ok) {
		throw new Error('Failed to fetch country info');
	}

	const data = (await response.json()) as ICountryInfo;

	return (
		<div className="space-y-8">
			<h2 className="text-2xl font-semibold text-center">{name}</h2>
			{data && (
				<>
					<div className="flex justify-center overflow-hidden max-w-[400px] mx-auto">
						<Image
							src={data.flag}
							alt={data.countryCode}
							width={200}
							height={150}
							className="w-auto h-auto rounded-xl"
							priority
						/>
					</div>

					<div className="items-center justify-items-center py-4 bg-gray-800  rounded-lg">
						<h3 className="text-xl font-semibold mb-8">
							Border Countries
						</h3>
						<ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
							{data.borders.map((country: IBorderCountry) => (
								<li key={country.countryCode}>
									<LinkItem
										href={`/countries/${country.countryCode}/${country.commonName}`}
										text={country.commonName}
									/>
								</li>
							))}
						</ul>
					</div>

					<div className="bg-gray-800 rounded-lg p-4">
						<h3 className="text-xl font-semibold mb-4 text-center">
							Population Chart
						</h3>
						<PopulationChart data={data.population} />
					</div>
				</>
			)}
		</div>
	);
}
