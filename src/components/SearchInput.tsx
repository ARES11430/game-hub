import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { useRef } from 'react';
import { BsSearch } from 'react-icons/bs';

import useGameQueryStore from '../stores/store';
import { useNavigate } from 'react-router-dom';

// * no longer need props with zustand
/* interface Props {
	onSearch: (searchText: string) => void;
} */

function SearchInput() {
	const ref = useRef<HTMLInputElement>(null);
	const setSearchtext = useGameQueryStore((s) => s.setSearchText);
	const navigate = useNavigate();

	return (
		<form
			style={{ width: '100%' }}
			onSubmit={(event) => {
				event.preventDefault();
				if (ref.current) {
					setSearchtext(ref.current.value);
					navigate('/');
				}
			}}
		>
			<InputGroup>
				<InputLeftElement children={<BsSearch />} />
				<Input ref={ref} borderRadius={20} variant='filled' placeholder='Search games...' />
			</InputGroup>
		</form>
	);
}

export default SearchInput;
