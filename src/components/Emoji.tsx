import { Image, ImageProps } from '@chakra-ui/react';
import bullsEye from '../assets/bulls-eye.webp';
import thumbsUp from '../assets/thumbs-up.webp';
import meh from '../assets/meh.webp';

interface Props {
	rating: number;
}

function Emoji({ rating }: Props): JSX.Element | null {
	if (rating < 3) return null;

	const emojiMapping: { [key: number]: ImageProps } = {
		3: { src: meh, alt: 'meh', boxSize: '20px' },
		4: { src: thumbsUp, alt: 'thumbsUp', boxSize: '20px' },
		5: { src: bullsEye, alt: 'bullsEye', boxSize: '25px' }
	};

	return <Image {...emojiMapping[rating]} />;
}

export default Emoji;
