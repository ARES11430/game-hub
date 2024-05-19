import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';

interface Props {
	onSelectSortOrder: (sortOrder: string) => void;
	sortOrder: string;
}

function SortSelector({ onSelectSortOrder, sortOrder }: Props): JSX.Element {
	const sortOrders = [
		{ value: '', lable: 'Relevance' },
		{ value: '-added', lable: 'Date added' },
		{ value: 'name', lable: 'Name' },
		{ value: '-released', lable: 'Release date' },
		{ value: '-metacritic', lable: 'Popularity' },
		{ value: '-rating', lable: 'Average rating' }
	];

	const currentSortOrder = sortOrders.find((order) => order.value === sortOrder);

	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<BsChevronDown />}>
				Orderby : {currentSortOrder ? currentSortOrder.lable : 'Relevance'}
			</MenuButton>
			<MenuList>
				{sortOrders.map((o) => (
					<MenuItem onClick={() => onSelectSortOrder(o.value)} key={o.value} value={o.value}>
						{o.lable}
					</MenuItem>
				))}
			</MenuList>
		</Menu>
	);
}

export default SortSelector;
