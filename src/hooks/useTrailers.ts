import { useQuery } from "@tanstack/react-query"
import ApiClient from "../services/api-client"
import { Trailer } from "../entities/Trailer"

const useTrailers = (gameId: number) => {
  const apiclient = new ApiClient<Trailer>(`/games/${gameId}/movies`)

  return useQuery({
    queryKey: ["trailers", gameId],
    queryFn: apiclient.getAll,
  })
}

export default useTrailers
