import { Card, CardBody, Heading, HStack, Image, Stack } from '@chakra-ui/react';

import { Game } from '../hooks/useGames';
import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';
import getCropedImageURL from '../services/image-url';
import Emoji from './Emoji';

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
					<HStack>
						<Emoji rating={game.rating_top} />
						<CriticScore score={game.metacritic} />
					</HStack>
				</HStack>
				<Heading fontSize='2xl' marginY={2}>
					{game.name}
				</Heading>
			</CardBody>
		</Card>
	);
}

export default GameCard;
