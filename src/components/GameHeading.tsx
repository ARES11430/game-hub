import { Heading } from '@chakra-ui/react';
import { GameQuery } from '../App';

interface Props {
	gameQuery: GameQuery;
}

function GameHeading({ gameQuery }: Props) {
	// * dynamic rendering
	const heading = `${gameQuery.platform?.name || ''} ${gameQuery.genre?.name || ''} Games`;
	return (
		<Heading as='h1' marginBottom='20px'>
			{heading}
		</Heading>
	);
}

export default GameHeading;
