import { Box, Heading, Image, SimpleGrid } from '@chakra-ui/react';
import useScreemShots from '../hooks/useScreenShots';

interface Props {
	gameId: number;
}

const GameScreenShots = ({ gameId }: Props) => {
	const { data: screenShots, error, isLoading } = useScreemShots(gameId);

	if (isLoading) return null;

	if (error) throw error;

	return (
		<>
			<Heading marginY={5}>Screen Shots</Heading>
			<SimpleGrid columns={{ base: 1, md: 2 }} spacing={3}>
				{screenShots?.results.map((sc) => (
					<Box key={sc.id} overflow='hidden'>
						<Image
							src={sc.image}
							width='100%'
							height={{ base: '200px', md: '300px', lg: '400px' }}
							objectFit='cover'
						/>
					</Box>
				))}
			</SimpleGrid>
		</>
	);
};

export default GameScreenShots;
