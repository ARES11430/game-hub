import { useInfiniteQuery } from '@tanstack/react-query';
import ms from 'ms';

import { GameQuery } from '../App';
import { FetchResponse } from '../services/api-client';
import gameService, { Game } from '../services/gameService';

const useGames = (gameQuery: GameQuery) =>
	useInfiniteQuery<FetchResponse<Game>, Error>({
		queryKey: ['games', gameQuery],
		queryFn: ({ pageParam }) =>
			gameService.getAll({
				params: {
					genres: gameQuery.genreId,
					parent_platforms: gameQuery.platformId,
					ordering: gameQuery.sortOrder,
					search: gameQuery.searchText,
					page: pageParam
				}
			}),
		initialPageParam: 1,
		getNextPageParam: (lastPage, allPages) => {
			return lastPage.next ? allPages.length + 1 : undefined;
		},
		staleTime: ms('24h') // 24h
	});

export default useGames;
