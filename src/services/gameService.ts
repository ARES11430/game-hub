import APIClient from './api-client';
import { Game } from '../models/Game';

export default new APIClient<Game>('/games');
