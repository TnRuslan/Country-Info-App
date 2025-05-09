import CountryInfo from '@/components/CountryInfo';
import LinkItem from '@/components/LinkItem';

type CountryPageProps = {
	params: {
		filter: string[];
	};
};

export default async function CountryPage({ params }: CountryPageProps) {
	const { filter } = await params;

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
				<CountryInfo code={filter[0]} name={filter[1]} />
			</div>

			<div className="text-center py-4 bg-gray-800 mt-8 rounded-lg container mx-auto">
				<p>&copy; 2025 Country Info App.</p>
			</div>
		</div>
	);
}
