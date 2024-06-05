import { ScreenShot } from '../models/ScreenShot';
import APIClient from './api-client';

const screenShotService = (gameId: number) => {
	return new APIClient<ScreenShot>(`/games/${gameId}/screenshots`);
};

export default screenShotService;
