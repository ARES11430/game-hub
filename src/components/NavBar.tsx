import { HStack, Image } from '@chakra-ui/react';
import logo from '../assets/logo.webp';
import SwitchColorMode from './SwitchColorMode';
import SearchInput from './SearchInput';

interface Props {
	onSearch: (searchText: string) => void;
}

function NavBar({ onSearch }: Props): JSX.Element {
	return (
		<HStack justifyContent='space-between' padding='10px'>
			<Image src={logo} boxSize='50px' />
			<SearchInput onSearch={onSearch} />
			<SwitchColorMode />
		</HStack>
	);
}

export default NavBar;
