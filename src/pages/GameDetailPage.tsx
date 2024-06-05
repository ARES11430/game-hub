import { useParams } from 'react-router-dom';
import { Box, Heading, Spinner } from '@chakra-ui/react';

import useGame from '../hooks/useGame';

import ExpandableText from '../components/ExpandableText';
import GameAttributes from '../components/GameAttributes';
import GameTrailer from '../components/GameTrailer';
import GameScreenShots from '../components/GameScreenShots';

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
		<Box paddingX='10%' marginY={5}>
			<Heading marginBottom={3}>{game.name}</Heading>
			<ExpandableText>{game.description_raw}</ExpandableText>
			<GameAttributes game={game} />
			<GameTrailer gameId={game.id} />
			<GameScreenShots gameId={game.id} />
		</Box>
	);
};

export default GameDetailPage;
