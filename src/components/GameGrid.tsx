import { SimpleGrid, Spinner, Text } from '@chakra-ui/react';
import InfiniteScroll from 'react-infinite-scroll-component';
import React from 'react';

// * hooks
import useGames from '../hooks/useGames';

// * components
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';

// * no longer need props with zustand
/* interface Props {
	gameQuery: GameQuery;
} */

function GameGrid(): JSX.Element {
	const { data: games, error, isLoading, fetchNextPage, hasNextPage } = useGames();
	const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

	if (error) return <Text>{error.message}</Text>;

	const fetchedGames =
		games?.pages.reduce((totalPages, page) => totalPages + page.results.length, 0) || 0;

	return (
		<InfiniteScroll
			dataLength={fetchedGames}
			hasMore={!!hasNextPage}
			next={() => fetchNextPage()}
			loader={<Spinner />}
		>
			<SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} padding='15px' spacing={10}>
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
		</InfiniteScroll>
	);
}

export default GameGrid;
