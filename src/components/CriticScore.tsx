import { Badge } from '@chakra-ui/react';

interface Props {
	score: number;
}

function CriticScore({ score }: Props) {
	let color = score > 90 ? 'green' : score > 80 ? 'yellow' : score > 70 ? 'orange' : 'red';
	return (
		<>
			<Badge colorScheme={color} fontSize='14px' paddingX={2} borderRadius='50px'>
				{score}
			</Badge>
		</>
	);
}

export default CriticScore;
