import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.rawg.io/api',
	params: {
		key: 'f4cb8d83f3cc427e93145d7a8c1f5aec'
	}
});
