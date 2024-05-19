import { HStack, Switch, Text, useColorMode } from '@chakra-ui/react';

function SwitchColorMode() {
	const { toggleColorMode, colorMode } = useColorMode();

	return (
		<HStack>
			<Switch colorScheme='blue' isChecked={colorMode === 'dark'} onChange={toggleColorMode} />
			<Text whiteSpace='nowrap' fontWeight='bold'>
				Dark Mode
			</Text>
		</HStack>
	);
}

export default SwitchColorMode;
