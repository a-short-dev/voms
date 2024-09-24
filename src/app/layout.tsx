import type { Metadata } from 'next';
import '@/styles/globals.css';
import { geistMono, geistSans, nunito } from '@/styles/font';
import AppWrapper from '@/components/app-wrapper';
import appConfig from '@/config/app.config';

export const metadata: Metadata = {
	title: { default: 'Voice Out Minds', template: '%s - VOMS' },
	description: '',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body
				className={`${nunito.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<AppWrapper config={appConfig}>{children}</AppWrapper>
			</body>
		</html>
	);
}
