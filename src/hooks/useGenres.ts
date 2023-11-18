import { useQuery } from "@tanstack/react-query"
import ms from "ms"
import genres from "../data/genres"
import Genre from "../entities/Genre"
import APIClient, { FetchResponse } from "../services/api-client"

const apiClient = new APIClient<Genre>("/genres")

const useGenres = () =>
  useQuery<FetchResponse<Genre>, Error, FetchResponse<Genre>>({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: ms("1 day"),
    initialData: genres,
  })

export default useGenres
