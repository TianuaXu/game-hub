import { useInfiniteQuery } from "@tanstack/react-query"
import { GameQuery } from "../App"
import ApiClient, { FetchResponse } from "../services/api-client"
import { Platform } from "./usePlatforms"

const apiClient = new ApiClient<Game>("/games")

export interface Game {
    id: number
    name: string
    background_image: string
    parent_platforms: { platform: Platform }[]
    metacritic: number
    rating_top: number
}

const useGames = (gameQuery: GameQuery) =>
    useInfiniteQuery<FetchResponse<Game>, Error>({
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
        staleTime: 1000 * 60 * 60 * 24, // 24h
    })

export default useGames
