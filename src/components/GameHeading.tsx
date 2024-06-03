import { Heading } from '@chakra-ui/react';
import usePlatform from '../hooks/usePlatform';
import useGenre from '../hooks/useGenre';
import useGameQueryStore from '../stores/store';

// * no longer need props with zustand
/* interface Props {
	gameQuery: GameQuery;
} */

function GameHeading() {
	// * dynamic rendering
	const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
	const genre = useGenre(genreId);

	const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
	const platform = usePlatform(platformId);

	const heading = `${platform?.name || ''} ${genre?.name || ''} Games`;
	return (
		<Heading as='h1' marginBottom='20px'>
			{heading}
		</Heading>
	);
}

export default GameHeading;
