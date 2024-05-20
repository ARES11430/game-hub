import { Box, Card, CardBody, Heading, HStack, Image, Stack } from '@chakra-ui/react';

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
		<Card display='flex' flexDirection='column' flex='1'>
			<Image src={getCropedImageURL(game.background_image)} />
			<CardBody display='flex' flexDirection='column' justifyContent='space-between' flex='1'>
				<Box>
					<PlatformIconList platforms={game.parent_platforms.map((p) => p.platform)} />
					<Heading fontSize='2xl' marginY={2}>
						{game.name}
					</Heading>
				</Box>
				<HStack marginTop={2} alignSelf='flex-end'>
					<Emoji rating={game.rating_top} />
					<CriticScore score={game.metacritic} />
				</HStack>
			</CardBody>
		</Card>
	);
}

export default GameCard;
