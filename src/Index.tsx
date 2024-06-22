import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';

import theme from './theme.ts';

// * router
import router from './routes.tsx';
import { HelmetProvider } from 'react-helmet-async';

const client = new QueryClient({
	defaultOptions: {
		queries: {
			retry: 3,
			gcTime: 300000,
			staleTime: 0,
			refetchOnWindowFocus: true,
			refetchOnReconnect: true,
			refetchOnMount: true
		}
	}
});

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ChakraProvider theme={theme}>
			<ColorModeScript initialColorMode={theme.config.initialColorMode} />
			<QueryClientProvider client={client}>
				<HelmetProvider>
					<RouterProvider router={router} />
					<ReactQueryDevtools />
				</HelmetProvider>
			</QueryClientProvider>
		</ChakraProvider>
	</React.StrictMode>
);
