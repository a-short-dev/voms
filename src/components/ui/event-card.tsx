import Image from 'next/image';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from './card';

import default_img from '@/assets/images/event.jpg';

type EventCardProps = {
	title?: string;
	image?: string;
	description?: string;
};

const EventCard: React.FC<EventCardProps> = ({
	title = 'placeholder',
	image,
	description,
}) => {
	return (
		<Card className='w-full max-w-sm flex-shrink-0 rounded-lg'>
			<CardContent className='p-0'>
				<Image
					className='h-30 w-full overflow-clip'
					src={image ?? default_img}
					alt='event'
					priority
				/>
			</CardContent>
			<CardHeader>
				<CardTitle>{title}</CardTitle>
				<CardDescription>{description}</CardDescription>
			</CardHeader>
		</Card>
	);
};

export default EventCard;
