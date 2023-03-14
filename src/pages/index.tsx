import { useState } from 'react';
import { Button, Card, Heading, Input, Rating, Tag, Text, TextArea } from '../components';
import axios from 'axios';
import { GetServerSideProps } from 'next';
import { withLayout } from '../layout/layout';

const Index = () => {
	const [isClick, setIsClick] = useState(false);
	const [rating, setRating] = useState<number>(4);

	return (
		<>
			<Heading tag='h2'>Heading</Heading>
			<Text size='s'>Text</Text>
			<Tag size='s' color='red'>
				Red
			</Tag>
			<Tag size='m' color='green'>
				Green
			</Tag>
			<br />
			<Button appearance='primary'>Primary</Button>
			<Button appearance='ghost'>Ghost</Button>
			<Button appearance='ghost' arrow={isClick ? 'down' : 'right'} onClick={() => setIsClick(prev => !prev)}>
				Arrow
			</Button>
			<Button appearance='primary' arrow='down'>
				Down
			</Button>

			<br />

			<Input placeholder='Enter' />
			<div>
				<TextArea placeholder='Message' />
			</div>

			<br />

			<Rating rating={rating} isEditabled={true} setRating={setRating} />

			<Card color='white' style={{ marginTop: '30px' }}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat nesciunt error doloribus aperiam consectetur eius tempore
				dolore at illum necessitatibus.
			</Card>

			<Card color='primary' style={{ marginTop: '30px' }}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat nesciunt error doloribus aperiam consectetur eius tempore
				dolore at illum necessitatibus.
			</Card>
		</>
	);
};

export default withLayout(Index);

export const getServerSideProps: GetServerSideProps = async () => {
	const { data } = await axios.post(`${process.env.NEXT_PUBLIC_DOMAIN}/api/page-find`, { firstCategory: 1 });

	return {
		props: {
			data,
		},
	};
};
