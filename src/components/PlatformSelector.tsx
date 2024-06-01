import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';

import usePlatforms from '../hooks/usePlatforms';
import { Platform } from '../services/platformService';

interface Props {
	onSelectPlatform: (platform: Platform) => void;
	selectedPlatformId?: number;
}

function PlatformSelector({ onSelectPlatform, selectedPlatformId }: Props): JSX.Element | null {
	const { data: platforms, error } = usePlatforms();
	const platform = platforms?.results.find((platform) => platform.id === selectedPlatformId);

	if (error) return null;

	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<BsChevronDown />}>
				{selectedPlatformId ? platform?.name : 'Platforms'}
			</MenuButton>
			<MenuList>
				{platforms?.results.map((platform) => (
					<MenuItem onClick={() => onSelectPlatform(platform)} key={platform.id}>
						{platform.name}
					</MenuItem>
				))}
			</MenuList>
		</Menu>
	);
}

export default PlatformSelector;
