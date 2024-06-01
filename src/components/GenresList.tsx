import { HStack, Image, List, ListItem, Spinner, Button, Heading } from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';
import { Genre } from '../services/genreService';
import getCropedImageURL from '../services/image-url';

interface Props {
	onSelectGenre: (genre: Genre) => void;
	selectedGenreId?: number;
}

function GenresList({ onSelectGenre, selectedGenreId }: Props) {
	const { data: genres, isLoading, error } = useGenres();

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
								onClick={() => onSelectGenre(genre)}
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
