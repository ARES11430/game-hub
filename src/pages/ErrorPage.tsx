import { Box, Heading, Text } from '@chakra-ui/react';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

import NavBar from '../components/NavBar';

const ErrorPage = () => {
	const error = useRouteError();
	const notFoundError = isRouteErrorResponse(error);

	return (
		<>
			<NavBar />
			<Box textAlign='center' marginY={5}>
				<Heading fontSize='100px' fontWeight='bold' marginY={2}>
					Oops!
				</Heading>
				<Text fontSize='25px' fontWeight='bold'>
					{notFoundError ? 'This Page Does Not Exist!' : 'An Unexpected Error Has Occured!'}
				</Text>
			</Box>
		</>
	);
};

export default ErrorPage;
