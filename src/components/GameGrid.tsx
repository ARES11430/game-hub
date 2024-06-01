import { Box, Button, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';

// * hooks
import useGames from '../hooks/useGames';

// * components
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
import { GameQuery } from '../App';

interface Props {
	gameQuery: GameQuery;
}

function GameGrid({ gameQuery }: Props): JSX.Element {
	const {
		data: games,
		error,
		isLoading,
		isFetchingNextPage,
		fetchNextPage,
		hasNextPage
	} = useGames(gameQuery);
	const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

	if (error) return <Text>{error.message}</Text>;

	return (
		<Box padding='15px'>
			<SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={10}>
				{isLoading &&
					skeletons.map((skeleton) => (
						<GameCardContainer key={skeleton}>
							<GameCardSkeleton />
						</GameCardContainer>
					))}
				{games?.pages.map((page, index) => (
					<React.Fragment key={index}>
						{page.results.map((game) => (
							<GameCardContainer key={game.id}>
								<GameCard game={game} />
							</GameCardContainer>
						))}
					</React.Fragment>
				))}
			</SimpleGrid>
			{hasNextPage && (
				<Button marginY={4} onClick={() => fetchNextPage()}>
					{isFetchingNextPage ? 'Loading...' : 'Load More'}
				</Button>
			)}
		</Box>
	);
}

export default GameGrid;
