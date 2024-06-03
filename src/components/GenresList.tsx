import { HStack, Image, List, ListItem, Spinner, Button, Heading } from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';
import getCropedImageURL from '../services/image-url';
import useGameQueryStore from '../stores/store';

// * no longer need props with zustand
/* interface Props {
	onSelectGenre: (genre: Genre) => void;
	selectedGenreId?: number;
} */

function GenresList() {
	const { data: genres, isLoading, error } = useGenres();
	const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
	const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId);

	if (error) return null;

	if (isLoading) return <Spinner />;

	return (
		<>
			<Heading fontSize='2xl'>Genres</Heading>
			<List paddingTop='15px'>
				{genres?.results.map((genre) => (
					<ListItem key={genre.id} paddingY='8px'>
						<HStack>
							<Image
								boxSize='32px'
								borderRadius={8}
								objectFit='cover'
								src={getCropedImageURL(genre.image_background)}
							/>
							<Button
								whiteSpace='normal'
								textAlign='left'
								colorScheme={genre.id === selectedGenreId ? 'blue' : ''}
								onClick={() => setSelectedGenreId(genre.id)}
								variant='link'
								fontSize='lg'
							>
								{genre.name}
							</Button>
						</HStack>
					</ListItem>
				))}
			</List>
		</>
	);
}

export default GenresList;
