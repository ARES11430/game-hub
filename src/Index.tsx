import React from 'react';
import ReactDOM from 'react-dom/client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';

import theme from './theme.ts';

import App from './App.tsx';

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
				<App />
				<ReactQueryDevtools />
			</QueryClientProvider>
		</ChakraProvider>
	</React.StrictMode>
);
