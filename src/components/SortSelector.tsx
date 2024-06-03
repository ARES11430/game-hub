import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';

import useGameQueryStore from '../stores/store';

// * no longer need props with zustand
/* interface Props {
	onSelectSortOrder: (sortOrder: string) => void;
	sortOrder: string;
} */

function SortSelector(): JSX.Element {
	const sortOrders = [
		{ value: '', lable: 'Relevance' },
		{ value: '-added', lable: 'Date added' },
		{ value: 'name', lable: 'Name' },
		{ value: '-released', lable: 'Release date' },
		{ value: '-metacritic', lable: 'Popularity' },
		{ value: '-rating', lable: 'Average rating' }
	];

	const sortOrder = useGameQueryStore((s) => s.gameQuery.sortOrder);
	const setSortOrder = useGameQueryStore((s) => s.setSortOrder);

	const currentSortOrder = sortOrders.find((order) => order.value === sortOrder);

	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<BsChevronDown />}>
				Orderby : {currentSortOrder ? currentSortOrder.lable : 'Relevance'}
			</MenuButton>
			<MenuList>
				{sortOrders.map((order) => (
					<MenuItem onClick={() => setSortOrder(order.value)} key={order.value} value={order.value}>
						{order.lable}
					</MenuItem>
				))}
			</MenuList>
		</Menu>
	);
}

export default SortSelector;
