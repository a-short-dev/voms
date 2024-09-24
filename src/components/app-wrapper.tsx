import { AppConfig } from '@/types/types';

type AppWrapperProps = {
	children: React.ReactNode;
	config: AppConfig;
};
export default function AppWrapper({
	children,
	config,
}: Readonly<AppWrapperProps>) {
	if (config.mode === 'maintenance')
		return (
			<div>
				<h2>Ooops we are down for maintenance</h2>
			</div>
		);
	return <>{children}</>;
}
