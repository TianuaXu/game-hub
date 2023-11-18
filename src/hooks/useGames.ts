import { useInfiniteQuery } from "@tanstack/react-query"
import ms from "ms"
import Game from "../entities/Game"
import ApiClient, { FetchResponse } from "../services/api-client"
import useGameQueryStore from "../store"

const apiClient = new ApiClient<Game>("/games")

const useGames = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery)

  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery], // every time the gameQuery changes, the query will be refetched
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined
    },
    staleTime: ms("1 day"),
  })
}

export default useGames
