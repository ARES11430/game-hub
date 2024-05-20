import { Grid, GridItem, Show, HStack, Box } from '@chakra-ui/react';
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
import GameHeading from './components/GameHeading';

export interface GameQuery {
	genre: Genre | null;
	platform: Platform | null;
	sortOrder: string;
	searchText: string;
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
				<NavBar onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })} />
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
				<Box paddingLeft='13px'>
					<GameHeading gameQuery={gameQuery} />
					<HStack spacing={5} marginBottom={2}>
						<PlatformSelector
							selectedPlatform={gameQuery.platform}
							onSelectPlatform={(platform) => setGameQuery({ ...gameQuery, platform })}
						/>
						<SortSelector
							sortOrder={gameQuery.sortOrder}
							onSelectSortOrder={(sortOrder) => setGameQuery({ ...gameQuery, sortOrder })}
						/>
					</HStack>
				</Box>
				<GameGrid gameQuery={gameQuery} />
			</GridItem>
		</Grid>
	);
}

export default App;
