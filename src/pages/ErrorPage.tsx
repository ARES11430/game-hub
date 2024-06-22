import { Box, Heading, Text } from '@chakra-ui/react';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

import NavBar from '../components/NavBar';
import { Helmet } from 'react-helmet-async';

const ErrorPage = () => {
	const error = useRouteError();
	const notFoundError = isRouteErrorResponse(error);

	return (
		<>
			<NavBar />
			<Box textAlign='center' marginY={5}>
				{notFoundError ? (
					<Helmet>
						<title>Game Hub | Error 404</title>
						<meta name='description' content='This Page Does Not Exist!' />
					</Helmet>
				) : (
					<Helmet>
						<title>Game Hub | Server Error</title>
						<meta name='description' content='An Unexpected Error Has Occured!' />
					</Helmet>
				)}

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
