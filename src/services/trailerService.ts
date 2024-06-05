import { Trailer } from '../models/Trailer';
import APIClient from './api-client';

const trailerService = (gameId: number) => {
	return new APIClient<Trailer>(`/games/${gameId}/movies`);
};

export default trailerService;
