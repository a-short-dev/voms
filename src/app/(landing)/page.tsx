import AppFooter from '@/components/app-footer';
import AppHeader from '@/components/app-header';
import EventCard from '@/components/ui/event-card';

export default function Home() {
	return (
		<div className='relative w-full'>
			<div className='relative w-full p-8'>
				<AppHeader />
				<main>
					<section className='flex min-h-96 w-full flex-col items-center justify-center'>
						<span className='mb-4 self-start'>
							<h2 className='text-lg font-medium'>
								mental health and{' '}
								<span className='relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-[#FF0000]'>
									<span className='relative text-white'>well-being</span>
								</span>
							</h2>
						</span>
						<h1 className='mb-2 text-6xl font-semibold capitalize text-slate-900'>
							<span className='mb-2'>voice out minds</span>
						</h1>
					</section>

					<section className='relative w-full'>
						<h2 className='mb-2 text-4xl font-medium text-slate-700'>
							Up Coming Events
						</h2>
						<div className='flex w-full snap-y snap-mandatory gap-2 overflow-auto'>
							{Array.from({ length: 2 }, (_, i) => (
								<EventCard
									key={i}
									title='WELLNESS FEST'
								/>
							))}
						</div>
					</section>

					<section className=''>
						<h2 className='mb-5 text-4xl font-medium text-slate-700'>
							About Us
						</h2>
						<details>
							<summary>
								Voice Out Minds (VOMs) is dedicated to supporting mental health
								and well-being while also empowering individuals
							</summary>
							<p className='mt-4 text-base font-semibold text-slate-900'>
								Voice Out Minds (VOMs) is dedicated to supporting mental health
								and well-being while also empowering individuals through various
								programs. We reach out to those struggling with depression,
								suicidal thoughts, and different forms of abuse, providing a
								compassionate space for support and recovery. Additionally, we
								offer empowerment programs to help people by donating, paying
								medical bills, covering school fees, and providing other forms
								of support for individuals of all ages, from children to the
								elderly. Since 2019, we have undertaken numerous projects to
								improve lives and foster community well-being.
							</p>
						</details>
					</section>

					<div></div>

					<section className='[&>*>h3]:font-bold [&>*>h3]:text-slate-800 [&>p*]:text-base'>
						<h2 className='mb-5 text-4xl font-medium text-slate-950'>
							Our Core Values
						</h2>
						<div className='px-2 [&>*>h3]:my-2 [&>*>h3]:text-2xl [&>*>h3]:text-red-500'>
							<div>
								<h3>Compassion</h3>
								<p>
									We approach every individual with empathy and understanding.
								</p>
							</div>
							<div>
								<h3>Empowerment</h3>
								<p>
									We empower individuals to take charge of their mental health
									journey and overall well-being.
								</p>
							</div>
							<div>
								<h3>Education</h3>
								<p>
									We believe in educating the public about mental health to
									reduce stigma and promote awareness.
								</p>
							</div>
							<div>
								<h3>Inclusivity</h3>
								<p>
									We embrace diversity and ensure our services are accessible to
									all. Commitment: We are committed to making a positive impact
									on the lives of those we serve through both mental health
									support and empowerment programs.
								</p>
							</div>
						</div>
					</section>
				</main>
			</div>
			<AppFooter />
		</div>
	);
}
