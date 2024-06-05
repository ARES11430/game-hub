import { useQuery } from '@tanstack/react-query';
import screenShotService from '../services/screenShotService';

const useScreemShots = (gameId: number) => {
	return useQuery({
		queryKey: ['screenshots', gameId],
		queryFn: screenShotService(gameId).getAll
	});
};

export default useScreemShots;
