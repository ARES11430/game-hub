import { useParams } from 'react-router-dom';
import { Box, Heading, SimpleGrid, Spinner } from '@chakra-ui/react';

import useGame from '../hooks/useGame';

import ExpandableText from '../components/ExpandableText';
import GameAttributes from '../components/GameAttributes';
import GameTrailer from '../components/GameTrailer';
import GameScreenShots from '../components/GameScreenShots';
import { Helmet } from 'react-helmet-async';

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
		<SimpleGrid columns={{ base: 1, md: 2 }} paddingX='2%' marginY={10}>
			<Helmet>
				<title>Game Hub | {game.name}</title>
				<meta name='description' content={game.description_raw} />
			</Helmet>
			<Box paddingX='2%'>
				<Heading marginBottom={3}>{game.name}</Heading>
				<ExpandableText>{game.description_raw}</ExpandableText>
				<GameAttributes game={game} />
			</Box>
			<Box paddingX='2%'>
				<GameTrailer gameId={game.id} />
				<GameScreenShots gameId={game.id} />
			</Box>
		</SimpleGrid>
	);
};

export default GameDetailPage;
