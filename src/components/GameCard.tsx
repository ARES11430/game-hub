import { Card, CardBody, Heading, HStack, Image } from '@chakra-ui/react';

import { Game } from '../hooks/useGames';
import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';
import getCropedImageURL from '../services/image-url';

interface Props {
	game: Game;
}

function GameCard({ game }: Props): JSX.Element {
	return (
		<Card height='400px'>
			<Image src={getCropedImageURL(game.background_image)} />
			<CardBody display='flex' flexDirection='column'>
				<HStack justifyContent='space-between'>
					<PlatformIconList platforms={game.parent_platforms.map((p) => p.platform)} />
					<CriticScore score={game.metacritic} />
				</HStack>
				<Heading fontSize='2xl' marginY={2}>
					{game.name}
				</Heading>
			</CardBody>
		</Card>
	);
}

export default GameCard;
