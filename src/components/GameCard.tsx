import { Box, Card, CardBody, Heading, HStack, Image } from '@chakra-ui/react';

import Game from '../models/Game';
import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';
import getCropedImageURL from '../services/image-url';
import Emoji from './Emoji';
import { Link } from 'react-router-dom';

interface Props {
	game: Game;
}

function GameCard({ game }: Props): JSX.Element {
	return (
		<Card display='flex' flexDirection='column' flex='1'>
			<Link to={`/games/${game.slug}`}>
				<Image src={getCropedImageURL(game.background_image)} />
			</Link>
			<CardBody display='flex' flexDirection='column' justifyContent='space-between' flex='1'>
				<Box>
					<PlatformIconList platforms={game.parent_platforms.map((p) => p.platform)} />
					<Heading fontSize='2xl' marginY={2}>
						<Link to={`/games/${game.slug}`}>{game.name}</Link>
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
