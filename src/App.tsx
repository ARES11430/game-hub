import { Grid, GridItem, Show } from '@chakra-ui/react';
import { useState } from 'react';

// * components
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import GenresList from './components/GenresList';
import PlatformSelector from './components/PlatformSelector';

// *interface
import { Genre } from './hooks/useGenres';
import { Platform } from './hooks/useGames';

function App(): JSX.Element {
	const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
	const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);

	return (
		<Grid
			templateAreas={{
				base: `'nav' 'main'`,
				lg: `'nav nav' 'aside main'`
			}}
			templateColumns={{
				base: '1fr',
				lg: '250px 1fr'
			}}
		>
			<GridItem area='nav'>
				<NavBar />
			</GridItem>
			<Show above='lg'>
				<GridItem area='aside' paddingX={5}>
					<GenresList
						selectedGenre={selectedGenre}
						onSelectGenre={(genre) => setSelectedGenre(genre)}
					/>
				</GridItem>
			</Show>
			<GridItem area='main'>
				<PlatformSelector
					selectedPlatform={selectedPlatform}
					onSelectPlatform={(platform) => setSelectedPlatform(platform)}
				/>
				<GameGrid selectedGenre={selectedGenre} selectedPlatform={selectedPlatform} />
			</GridItem>
		</Grid>
	);
}

export default App;
