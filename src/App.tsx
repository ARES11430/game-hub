import { Grid, GridItem, Show, HStack, Box } from '@chakra-ui/react';

// * components
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import GenresList from './components/GenresList';
import PlatformSelector from './components/PlatformSelector';
import SortSelector from './components/SortSelector';

// *interface
import GameHeading from './components/GameHeading';

export interface GameQuery {
	genreId?: number;
	platformId?: number;
	sortOrder: string;
	searchText: string;
}

function App(): JSX.Element {
	//const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

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
					<GenresList />
				</GridItem>
			</Show>
			<GridItem area='main'>
				<Box paddingLeft='13px'>
					<GameHeading />
					<HStack spacing={5} marginBottom={2}>
						<PlatformSelector />
						<SortSelector />
					</HStack>
				</Box>
				<GameGrid />
			</GridItem>
		</Grid>
	);
}

export default App;
