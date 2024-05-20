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
				<Heading fontSize='2xl'>{game.name}</Heading>
				<HStack justifyContent='space-between' mt='auto'>
					<PlatformIconList platforms={game.parent_platforms.map((p) => p.platform)} />
					<CriticScore score={game.metacritic} />
				</HStack>
			</CardBody>
		</Card>
	);
}

export default GameCard;
