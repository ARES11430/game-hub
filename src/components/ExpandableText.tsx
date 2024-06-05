import { Button, Text } from '@chakra-ui/react';
import { useState } from 'react';

interface Props {
	children: string;
}

const ExpandableText = ({ children }: Props): JSX.Element | null => {
	const [expanded, setExpanded] = useState(false);

	const limit = 500;

	if (!children) return null;

	if (children.length <= limit) return <Text textAlign='justify'>{children}</Text>;

	const summery = expanded ? children : children.substring(0, limit) + '...';

	return (
		<Text textAlign='justify'>
			{summery}
			<Button
				fontWeight='bold'
				background='teal'
				colorScheme='teal'
				size='xs'
				onClick={() => setExpanded(!expanded)}
				marginLeft={1}
			>
				{expanded ? 'Show less' : 'Read more'}
			</Button>
		</Text>
	);
};

export default ExpandableText;
