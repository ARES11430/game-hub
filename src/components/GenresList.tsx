import { HStack, Image, List, ListItem, Spinner, Button } from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenres';
import getCropedImageURL from '../services/image-url';

interface Props {
	onSelectGenre: (genre: Genre) => void;
}

function GenresList({ onSelectGenre }: Props) {
	const { data, isLoading, error } = useGenres();

	if (error) return null;

	if (isLoading) return <Spinner />;

	return (
		<List paddingTop='15px'>
			{data.map((genre) => (
				<ListItem key={genre.id} paddingY='8px'>
					<HStack>
						<Image
							boxSize='32px'
							borderRadius={8}
							src={getCropedImageURL(genre.image_background)}
						/>
						<Button onClick={() => onSelectGenre(genre)} variant='link' fontSize='lg'>
							{genre.name}
						</Button>
					</HStack>
				</ListItem>
			))}
		</List>
	);
}

export default GenresList;
