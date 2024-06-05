import { useQuery } from '@tanstack/react-query';
import trailerService from '../services/trailerService';

const useTrailers = (gameId: number) => {
	return useQuery({
		queryKey: ['trailers', gameId],
		queryFn: trailerService(gameId).getAll
	});
};

export default useTrailers;
