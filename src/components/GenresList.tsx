import { HStack, Text, Image, List, ListItem, Spinner } from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';
import getCropedImageURL from '../services/image-url';

function GenresList() {
	const { genres, isLoading, error } = useGenres();

	if (error) return null;

	if (isLoading) return <Spinner />;

	return (
		<List paddingTop='15px'>
			{genres.map((genre) => (
				<ListItem key={genre.id} paddingY='8px'>
					<HStack>
						<Image
							boxSize='32px'
							borderRadius={8}
							src={getCropedImageURL(genre.image_background)}
						/>
						<Text fontSize='lg'>{genre.name}</Text>
					</HStack>
				</ListItem>
			))}
		</List>
	);
}

export default GenresList;
