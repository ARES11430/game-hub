import { Grid, GridItem, Show, HStack } from '@chakra-ui/react';
import { useState } from 'react';

// * components
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import GenresList from './components/GenresList';
import PlatformSelector from './components/PlatformSelector';
import SortSelector from './components/SortSelector';

// *interface
import { Genre } from './hooks/useGenres';
import { Platform } from './hooks/useGames';

export interface GameQuery {
	genre: Genre | null;
	platform: Platform | null;
	sortOrder: string;
}

function App(): JSX.Element {
	const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

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
						selectedGenre={gameQuery.genre}
						onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
					/>
				</GridItem>
			</Show>
			<GridItem area='main'>
				<HStack spacing={5} paddingLeft={3} marginBottom={2}>
					<PlatformSelector
						selectedPlatform={gameQuery.platform}
						onSelectPlatform={(platform) => setGameQuery({ ...gameQuery, platform })}
					/>
					<SortSelector
						sortOrder={gameQuery.sortOrder}
						onSelectSortOrder={(sortOrder) => setGameQuery({ ...gameQuery, sortOrder })}
					/>
				</HStack>
				<GameGrid gameQuery={gameQuery} />
			</GridItem>
		</Grid>
	);
}

export default App;
