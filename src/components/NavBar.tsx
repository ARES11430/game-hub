import { HStack, Image } from '@chakra-ui/react';
import logo from '../assets/logo.webp';
import SwitchColorMode from './SwitchColorMode';
import SearchInput from './SearchInput';
import { Link } from 'react-router-dom';

// * no longer need props with zustand
/* interface Props {
	onSearch: (searchText: string) => void;
} */

function NavBar(): JSX.Element {
	return (
		<HStack justifyContent='space-between' padding='10px'>
			<Link to='/'>
				<Image src={logo} boxSize='50px' objectFit='cover' />
			</Link>
			<SearchInput />
			<SwitchColorMode />
		</HStack>
	);
}

export default NavBar;
