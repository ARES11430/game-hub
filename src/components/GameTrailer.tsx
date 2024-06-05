import { Box, Heading } from '@chakra-ui/react';
import useTrailers from '../hooks/useTrailers';

interface Props {
	gameId: number;
}

const GameTrailer = ({ gameId }: Props): JSX.Element | null => {
	const { data, error, isLoading } = useTrailers(gameId);

	if (isLoading) return null;

	if (error) throw error;

	const first = data?.results[0];

	return first ? (
		<>
			<Heading marginY={5}>Game Trailer</Heading>
			<Box
				as='video'
				src={first.data[480]}
				poster={first.preview}
				controls
				width='100%'
				height='auto'
			/>
		</>
	) : null;
};

export default GameTrailer;
