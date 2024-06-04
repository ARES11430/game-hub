import { createBrowserRouter } from 'react-router-dom';

// * pages
import Layout from './pages/Layout';
import HomePage from './pages/HomePage';
import GameDetailPage from './pages/GameDetailPage';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{ index: true, element: <HomePage /> },
			{ path: 'games/:id', element: <GameDetailPage /> }
		]
	}
]);

export default router;
