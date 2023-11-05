import { useEffect, useState } from "react"
import apiClient from "../services/api-client"
import { AxiosRequestConfig, CanceledError } from "axios"


interface FetchResponse<T> {
    count: number
    results: T[]
}

const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: any[]) => {
    const [data, setData] = useState<T[]>([])
    const [error, setError] = useState("")
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        // AbortController is used to cancel the request when the component unmounts
        const controller = new AbortController()
        setLoading(true)
        apiClient
            .get<FetchResponse<T>>(endpoint, {
                signal: controller.signal,
                ...requestConfig
            })
            .then((res) => {
                setData(res.data.results)
                setLoading(false)
            })
            .catch((err) => {
                // If the request is canceled, we don't want to set the error
                // because it's not an error, it's just the user leaving the page
                if (err instanceof CanceledError) return
                setError(err.message)
                setLoading(false)
            })
        
        return () => controller.abort()
    }, deps ? [...deps] : []) // [] means this effect will only run once, when the component mounts

    return {data, error, isLoading}
}

export default useData;