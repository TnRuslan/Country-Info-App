'use client';

import { useAvailableCountries } from './hooks/useAvailableCountries';
import CountryList from './components/CountryList';
import Loader from './components/Loader';

export default function Home() {
	const { data, isLoading } = useAvailableCountries();

	return (
		<div className="min-h-screen flex flex-col justify-between p-8 bg-gray-900 text-white">
			<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
				<h1 className="text-2xl font-bold mb-4">Available Countries</h1>
				{isLoading ? <Loader /> : <CountryList data={data} />}
			</div>
		</div>
	);
}
