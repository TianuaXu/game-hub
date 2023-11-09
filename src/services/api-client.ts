import axios, { AxiosRequestConfig } from "axios"

export interface FetchResponse<T> {
    count: number
    results: T[]
}

const axiosInstance = axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "06c23af82b304396bff19ee48849fd6d",
    },
})

class ApiClient<T> {
    endpoint: string

    constructor(endpoint: string) {
        this.endpoint = endpoint
    }

    getAll = (config?: AxiosRequestConfig) => {
        return axiosInstance.get<FetchResponse<T>>(this.endpoint, config).then((res) => res.data)
    }
}

export default ApiClient
