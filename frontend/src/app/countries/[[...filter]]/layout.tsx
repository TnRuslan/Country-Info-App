import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Country Info',
	description: 'the detailed info about country',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <main>{children}</main>;
}
