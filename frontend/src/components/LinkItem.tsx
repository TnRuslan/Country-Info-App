import Link from 'next/link';

interface LinkItemProps {
	href: string;
	text: string;
}

export default function LinkItem({
	href,
	text,
}: LinkItemProps): React.ReactNode {
	return (
		<Link href={href}>
			<span className="text-blue-500 hover:text-blue-700 font-semibold py-2 px-4 border-2 border-transparent rounded-md hover:border-blue-500 transition-all ease-in-out duration-300 flex items-center justify-center">
				{text}
			</span>
		</Link>
	);
}
