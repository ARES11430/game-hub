import { useQuery } from '@tanstack/react-query';
import platformService from '../services/platformService';
import platforms from '../data/platforms';

const usePlatforms = () =>
	useQuery({
		queryKey: ['platforms'],
		queryFn: platformService.getAll,
		staleTime: 24 * 60 * 60 * 1000,
		initialData: platforms
	});

export default usePlatforms;
