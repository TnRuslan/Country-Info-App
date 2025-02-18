'use client';

import { useAvailableCountries } from './hooks/useAvailableCountries';
import CountryList from './components/CountryList';
import Loader from './components/Loader';

export default function Home() {
	const { data, isFetching } = useAvailableCountries();

	return (
		<div className="flex flex-col justify-between p-8 bg-gray-900 text-white min-h-screen">
			<h1 className="text-2xl font-bold mb-6 text-center">
				Available Countries
			</h1>
			<div className="flex-grow container mx-auto items-center justify-items-center">
				{isFetching ? <Loader /> : <CountryList data={data} />}
			</div>
		</div>
	);
}
