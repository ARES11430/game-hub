import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface Props {
	children: ReactNode;
}

function GameCardContainer({ children }: Props) {
	return (
		<Box borderRadius={15} overflow='hidden' display='flex' flexDirection='column' height='100%'>
			{children}
		</Box>
	);
}

export default GameCardContainer;
