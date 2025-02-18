'use client';

import LinkItem from '@/app/components/LinkItem';
import Loader from '@/app/components/Loader';
import PopulationChart from '@/app/components/PopulationChart';
import { useCountryInfo } from '@/app/hooks/useCountryInfo';
import { IBorderCountry } from '@/app/interfaces/country.interface';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import React, { useEffect } from 'react';

interface CountryPageProps {
	params: Promise<{ code: string }>;
}

export default function CountryPage({ params }: CountryPageProps) {
	const { code } = React.use(params);
	const searchParams = useSearchParams();
	const countryName = searchParams.get('name');

	const { mutate, data } = useCountryInfo();

	useEffect(() => {
		if (code && countryName) {
			mutate({ code, data: { country: countryName } });
		}
	}, [code, countryName, mutate]);

	return (
		<div className="min-h-screen flex flex-col justify-between p-8 bg-gray-900 text-white">
			<div className="text-center mb-8">
				<h2 className="text-3xl font-semibold mb-6">
					Country Information
				</h2>
				<div className="max-w-[300px] mx-auto">
					<LinkItem href="/" text="Home Page" />
				</div>
			</div>

			<div className="flex-grow container mx-auto">
				{data ? (
					<div className="space-y-8">
						<h2 className="text-2xl font-semibold text-center">
							{countryName}
						</h2>
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
											href={`/countries/${country.countryCode}?name=${country.commonName}`}
											text={country.commonName}
										/>
									</li>
								))}
							</ul>
						</div>

						<PopulationChart data={data.population} />
					</div>
				) : (
					<Loader />
				)}
			</div>

			<footer className="text-center py-4 bg-gray-800 mt-8 rounded-lg container mx-auto">
				<p>&copy; 2025 Country Info App.</p>
			</footer>
		</div>
	);
}
