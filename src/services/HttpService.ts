/* eslint-disable max-len */
import { create, AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';

class HttpService {
    private axiosInstance: AxiosInstance;

    constructor(baseURL: string) {
        this.axiosInstance = create({
            baseURL,
        });
    }

    public async get<T>(url: string, queryParams?: {
        [key: string]: any
    }, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        const requestConfig = {
            ...config,
            params: queryParams,
        };

        const response = await this.axiosInstance.get<AxiosResponse<T>>(url, requestConfig);
        return response.data;
    }

    public async post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        const response = await this.axiosInstance.post<AxiosResponse<T>>(url, data, config);
        return response.data;
    }

    public async put<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        const response = await this.axiosInstance.put<AxiosResponse<T>>(url, data, config);
        return response.data
    }

    public async delete<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        const response = await this.axiosInstance.delete<AxiosResponse<T>>(url, config);
        return response.data;
    }
}

const API_BASE_URL = import.meta.env.VITE_TARGET_URL || 'http://localhost:4000';

const apiService = new HttpService(API_BASE_URL);

export {apiService};

