import { useParams } from 'react-router-dom';
import { Heading, Spinner, Text } from '@chakra-ui/react';

import useGame from '../hooks/useGame';

const GameDetailPage = () => {
	const { slug } = useParams();
	const { data: game, isLoading, error } = useGame(slug!);

	if (isLoading) return <Spinner />;

	if (error || !game) throw error;

	return (
		<>
			<Heading paddingX={500} marginY={5}>
				{game.name}
			</Heading>
			<Text paddingX={500} marginY={5} textAlign='justify'>
				{game.description_raw}
			</Text>
		</>
	);
};

export default GameDetailPage;
