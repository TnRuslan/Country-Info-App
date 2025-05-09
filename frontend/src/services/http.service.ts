import axios from 'axios';

interface IHttpServicesConfig {
	url: string;
	data?: unknown;
	headers?: Record<string, string>;
	params?: Record<string, unknown>;
}

class HttpServices {
	private baseUrl: string;
	private fetchingService: typeof axios;
	private apiVersion: string;

	constructor(
		baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL,
		fetchingService = axios,
		apiVersion = 'countries',
	) {
		this.baseUrl = baseUrl!;
		this.fetchingService = fetchingService;
		this.apiVersion = apiVersion;
	}

	private getFullApiUrl(url: string): string {
		return `${this.baseUrl}/${this.apiVersion}/${url}`;
	}

	private extractUrlAndDataFromConfig(
		config: IHttpServicesConfig,
	): Omit<IHttpServicesConfig, 'url' | 'data'> {
		const { url: _url, data: _data, ...configWithoutDataAndUrl } = config;
		return configWithoutDataAndUrl;
	}

	get<T>(config: IHttpServicesConfig): Promise<T> {
		return this.fetchingService.get(
			this.getFullApiUrl(config.url),
			this.extractUrlAndDataFromConfig(config),
		);
	}

	post<T>(config: IHttpServicesConfig): Promise<T> {
		return this.fetchingService.post(
			this.getFullApiUrl(config.url),
			config.data,
			this.extractUrlAndDataFromConfig(config),
		);
	}
}

export default HttpServices;
