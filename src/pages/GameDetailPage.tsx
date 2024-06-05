import { useParams } from 'react-router-dom';
import { Box, Heading, Spinner, Text } from '@chakra-ui/react';

import useGame from '../hooks/useGame';

const GameDetailPage = () => {
	const { slug } = useParams();
	const { data: game, isLoading, error } = useGame(slug!);

	if (isLoading)
		return (
			<Box textAlign='center' marginY='20%'>
				<Spinner thickness='4px' speed='0.65s' emptyColor='gray.200' color='blue.500' size='xl' />
			</Box>
		);

	if (error || !game) throw error;

	return (
		<>
			<Heading paddingX='10%' marginY={5}>
				{game.name}
			</Heading>
			<Text paddingX='10%' marginY={5} textAlign='justify'>
				{game.description_raw}
			</Text>
		</>
	);
};

export default GameDetailPage;
