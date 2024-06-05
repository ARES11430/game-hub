import APIClient from './api-client';
import { Genre } from '../models/Genre';

export default new APIClient<Genre>('/genres');
