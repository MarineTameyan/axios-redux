import axios, {AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig} from "axios";

const onRequest = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {

    // @ts-ignore
    const token = JSON.parse(localStorage.getItem('accounting_access_token'))
    if (token && token.access_token) {
        config.headers.set("Authorization", `Bearer ` + token.access_token)
        //
        // config.headers = {
        //   ...config.headers, "Authorization": `Bearer ` + token.access_token
        // }
    }
    return config;
}

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
    console.error(`[request error] [${JSON.stringify(error)}]`);
    return Promise.reject(error);
}

const onResponse = (response: AxiosResponse): AxiosResponse => {
    // console.info(`[response] [${JSON.stringify(response)}]`);
    if (response.status === 401 || response.status === 422) {
        localStorage.removeItem('accounting_access_token')
        window.location.reload()
    }
    return response;
}

const onResponseError = (error: AxiosError): Promise<AxiosError> => {
    // console.error(`[response error] [${JSON.stringify(error)}]`);
    // @ts-ignore
    if (error.response.status === 401 || error.response.status === 422) {
        localStorage.removeItem('accounting_access_token')
        window.location.reload()
    }
    return Promise.reject(error);
}

function setupInterceptorsTo(axiosInstance: AxiosInstance): AxiosInstance {
    axiosInstance.interceptors.request.use(onRequest, onRequestError);
    axiosInstance.interceptors.response.use(onResponse, onResponseError);
    return axiosInstance;
}

class RequestService {
    private BASE_URL: string = ''

    constructor(url: string) {
        this.BASE_URL = url
        setupInterceptorsTo(axios)
    }

    GET<T, R>(path: string, configs: AxiosRequestConfig = {}, isApiString: boolean = false) {
        return axios.get<T, AxiosResponse<R>>(this.generatePath(path, isApiString), configs).catch(err => err)
    }

    POST<T, R>(path: string, data: T, configs: AxiosRequestConfig = {}, isApiString: boolean = false) {
        return axios.post<T, AxiosResponse<R>>(this.generatePath(path, isApiString), data, configs).catch(err => err)
    }

    PUT<T, R>(path: string, data: T, configs: AxiosRequestConfig = {}, isApiString: boolean = false) {
        return axios.put<T, AxiosResponse<R>>(this.generatePath(path, isApiString), data, configs).catch(err => err)
    }

    PATCH<T, R>(path: string, data: T, configs: AxiosRequestConfig = {}, isApiString: boolean = false) {
        return axios.patch<T, AxiosResponse<R>>(this.generatePath(path, isApiString), data, configs).catch(err => err)
    }

    DELETE<T, R>(path: string, data?: T, configs: AxiosRequestConfig = {}, isApiString: boolean = false) {
        return axios.delete<T, AxiosResponse<R>>(this.generatePath(path, isApiString), configs).catch(err => err)
    }



    generatePath(path: string, isApi: boolean = false) {
        if (isApi) {
            return this.BASE_URL + 'api/' + path;
        }
        return this.BASE_URL + path;
    }
}

export default new RequestService('http://37.252.64.153:5000/')
// export default new RequestService('http://192.168.0.10:5000/')