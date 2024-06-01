import { useQuery } from '@tanstack/react-query';
import { GameQuery } from '../App';
import { FetchResponse } from '../services/api-client';
import gameService, { Game } from '../services/gameService';

const useGames = (gameQuery: GameQuery) =>
	useQuery<FetchResponse<Game>, Error>({
		queryKey: ['games', gameQuery],
		queryFn: () =>
			gameService.getAll({
				params: {
					genres: gameQuery.genre?.id,
					parent_platforms: gameQuery.platform?.id,
					ordering: gameQuery.sortOrder,
					search: gameQuery.searchText
				}
			}),
		staleTime: 1 * 60 * 60 * 60 * 1000
	});

export default useGames;
