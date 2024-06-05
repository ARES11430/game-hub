import APIClient from './api-client';
import Platform from '../models/Platform';

export default new APIClient<Platform>('/platforms/lists/parents');
