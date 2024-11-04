import AuthScheme from "@/types/auth-scheme";
import ApiResponseDto from "@/types/response/api-response.dto";
import axios, { AxiosRequestConfig } from "axios";

export default class Service {
    protected static authScheme: AuthScheme | null = null;
    protected static token: string | null = null;

    static set AuthScheme(authScheme: AuthScheme | null) {
        this.authScheme = authScheme;
    }

    static get AuthScheme() {
        return this.authScheme;
    }

    static set Token(token: string | null) {
        this.token = token;
    }

    static get Token() {
        return this.token;
    }

    constructor(
        protected readonly basePath: string
    ) {}

    getApiUri(path: string, query?: any) {
        const apiUri = new URL(import.meta.env.VITE_API_URI + this.basePath + path);
        if (query) {
            for (const key in query) {
                if (Array.isArray(query[key])) {
                    for (const item of query[key]) {
                        apiUri.searchParams.append(key, item);
                    }
                } else {
                    apiUri.searchParams.set(key, query[key]);
                }
            }
        }
        return apiUri;
    }

    async get<T>(uri: string, config?: AxiosRequestConfig) {
        const accessToken = localStorage.getItem("accessToken");
        if (!config) config = {};
        if (accessToken) config.headers = { ...config.headers, Authorization: `Bearer ${accessToken}` };
        const response = await axios.get<ApiResponseDto<T>>(uri, config);
        return response.data.data;
    }

    async delete<T>(uri: string, config?: AxiosRequestConfig) {
        const accessToken = localStorage.getItem("accessToken");
        if (!config) config = {};
        if (accessToken) config.headers = { ...config.headers, Authorization: `Bearer ${accessToken}` };
        const response = await axios.delete<ApiResponseDto<T>>(uri, config);
        return response.data.data;
    }

    async post<T>(uri: string, data: any, config?: AxiosRequestConfig) {
        const accessToken = localStorage.getItem("accessToken");
        if (!config) config = {};
        if (accessToken) config.headers = { ...config.headers, Authorization: `Bearer ${accessToken}` };
        const response = await axios.post<ApiResponseDto<T>>(uri, data, config);
        return response.data.data;
    }

    async put<T>(uri: string, data: any, config?: AxiosRequestConfig) {
        const accessToken = localStorage.getItem("accessToken");
        if (!config) config = {};
        if (accessToken) config.headers = { ...config.headers, Authorization: `Bearer ${accessToken}` };
        const response = await axios.put<ApiResponseDto<T>>(uri, data, config);
        return response.data.data;
    }
}