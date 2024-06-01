import { Heading } from '@chakra-ui/react';
import { GameQuery } from '../App';
import usePlatform from '../hooks/usePlatform';
import useGenre from '../hooks/useGenre';

interface Props {
	gameQuery: GameQuery;
}

function GameHeading({ gameQuery }: Props) {
	// * dynamic rendering
	const genre = useGenre(gameQuery.genreId);
	const platform = usePlatform(gameQuery.platformId);

	const heading = `${platform?.name || ''} ${genre?.name || ''} Games`;
	return (
		<Heading as='h1' marginBottom='20px'>
			{heading}
		</Heading>
	);
}

export default GameHeading;
