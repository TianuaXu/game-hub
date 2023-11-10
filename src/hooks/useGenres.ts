import { useQuery } from "@tanstack/react-query"
import genres from "../data/genres"
import APIClient, { FetchResponse } from "../services/api-client"

const apiClient = new APIClient<Genre>("/genres")

export interface Genre {
    id: number
    name: string
    image_background: string
}

const useGenres = () =>
    useQuery<FetchResponse<Genre>, Error, FetchResponse<Genre>>({
        queryKey: ["genres"],
        queryFn: apiClient.getAll,
        staleTime: 24 * 60 * 60 * 1000, // 24 hours
        initialData: genres,
    })

export default useGenres