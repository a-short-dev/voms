import Link from 'next/link';
import { AlignRight } from 'lucide-react';
import { Button } from './ui/button';
import { DONATION_LINK } from '@/constants';

export default function AppHeader() {
	return (
		<header className='w-full rounded-2xl border px-4 py-3 shadow-lg'>
			<div className='flex w-full items-center'>
				<Link href='/'>
					<h2>VOMS</h2>
				</Link>
				<div className='ml-auto'>
					<div className='text-base'>
						<AlignRight />
					</div>
					{/* <a
						href={DONATION_LINK}
						target='_blank'
						className='bg-gradient-to-r rounded-sm px-4 py-2 from-red-400 to-red-600 text-white'
					>
						Donate
					</a> */}
				</div>
			</div>
		</header>
	);
}
