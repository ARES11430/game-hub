import axios, { AxiosRequestConfig } from 'axios';

const axiosInstance = axios.create({
	baseURL: 'https://api.rawg.io/api',
	params: {
		key: import.meta.env.VITE_API_KEY
	}
});

export interface FetchResponse<T> {
	count: number;
	results: T[];
	next: string | null;
}

class APIClient<T> {
	constructor(private endpoint: string) {}

	getAll = async (config: AxiosRequestConfig): Promise<FetchResponse<T>> => {
		return await axiosInstance.get<FetchResponse<T>>(this.endpoint, config).then((res) => res.data);
	};

	post = async (data: T): Promise<T> => {
		return await axiosInstance.post<T>(this.endpoint, data).then((res) => res.data);
	};
}

export default APIClient;
