import { Box, Grid, Show, GridItem, HStack, Button } from '@chakra-ui/react';
import { useState } from 'react';
import GameGrid from '../components/GameGrid';
import GameHeading from '../components/GameHeading';
import GenresList from '../components/GenresList';
import PlatformSelector from '../components/PlatformSelector';
import SortSelector from '../components/SortSelector';

const HomePage = () => {
	const [showAside, setShowAside] = useState(false);

	const toggleAside = () => setShowAside(!showAside);

	return (
		<Box>
			<Show below='lg'>
				<Button onClick={toggleAside} marginX={showAside ? 5 : 3} marginBottom={4}>
					{showAside ? 'Hide Genres' : 'Show Genres'}
				</Button>
			</Show>
			<Grid
				templateAreas={{
					base: showAside ? `'aside main'` : `'main'`,
					lg: `'aside main'`
				}}
				templateColumns={{
					base: showAside ? '250px 1fr' : '1fr',
					lg: '250px 1fr'
				}}
			>
				<Show above='lg'>
					<GridItem area='aside' paddingX={5}>
						<GenresList />
					</GridItem>
				</Show>
				{showAside && (
					<GridItem area='aside' paddingX={5} display={{ lg: 'none' }}>
						<GenresList />
					</GridItem>
				)}
				<GridItem area='main'>
					<Box paddingLeft={{ base: '13px', lg: 0 }}>
						<GameHeading />
						<HStack spacing={5} marginBottom={2} marginRight={3}>
							<PlatformSelector />
							<SortSelector />
						</HStack>
					</Box>
					<GameGrid />
				</GridItem>
			</Grid>
		</Box>
	);
};

export default HomePage;
