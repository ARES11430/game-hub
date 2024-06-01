import { useQuery } from '@tanstack/react-query';
import ms from 'ms';

import platformService from '../services/platformService';
import platforms from '../data/platforms';

const usePlatforms = () =>
	useQuery({
		queryKey: ['platforms'],
		queryFn: platformService.getAll,
		staleTime: ms('24h'),
		initialData: platforms
	});

export default usePlatforms;
