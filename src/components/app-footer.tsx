import Link from 'next/link';
import { Facebook } from 'lucide-react';

const AppFooter = () => {
	return (
		<footer className='w-full bg-slate-900 p-8 text-slate-50'>
			<div>
				<div>
					<Link href='/'>
						<h2>VOMS</h2>
					</Link>
				</div>
				<div>
					<h4>Links</h4>
				</div>
			</div>
			{/* TODO:: Put horizontal seprator */}
			<div></div>
		</footer>
	);
};

export default AppFooter;
