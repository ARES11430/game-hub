import { SimpleGrid, Text } from '@chakra-ui/react';

// * hooks
import useGames from '../hooks/useGames';
import { Genre } from '../hooks/useGenres';

// * components
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
import { Platform } from '../hooks/usePlatforms';

interface Props {
	selectedGenre: Genre | null;
	selectedPlatform: Platform | null;
}

function GameGrid({ selectedGenre, selectedPlatform }: Props): JSX.Element {
	const { data: games, error, isLoading } = useGames(selectedGenre, selectedPlatform);
	const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

	return (
		<>
			{error && <Text>{error}</Text>}
			<SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={10} padding='15px'>
				{isLoading &&
					skeletons.map((skeleton) => (
						<GameCardContainer key={skeleton}>
							<GameCardSkeleton />
						</GameCardContainer>
					))}
				{games.map((game) => (
					<GameCardContainer key={game.id}>
						<GameCard game={game} />
					</GameCardContainer>
				))}
			</SimpleGrid>
		</>
	);
}

export default GameGrid;
