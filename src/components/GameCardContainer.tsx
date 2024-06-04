import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface Props {
	children: ReactNode;
}

function GameCardContainer({ children }: Props) {
	return (
		<Box
			_hover={{ transform: 'scale(1.05)', transition: 'transform 0.15s ease-in' }}
			borderRadius={15}
			overflow='hidden'
			display='flex'
			flexDirection='column'
			height='100%'
		>
			{children}
		</Box>
	);
}

export default GameCardContainer;
