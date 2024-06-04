import { useQuery } from '@tanstack/react-query';

import gameService from '../services/gameService';

const useGame = (slug: string) => {
	return useQuery({
		queryKey: ['games', slug],
		queryFn: () => gameService.get(slug)
	});
};

export default useGame;
