import { useQuery } from "@tanstack/react-query"
import { GameQuery } from "../App"
import ApiClient, { FetchResponse } from "../services/api-client"
import { Platform } from "./usePlatform"

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
    useQuery<FetchResponse<Game>, Error>({
        queryKey: ["games", gameQuery], // every time the gameQuery changes, the query will be refetched
        queryFn: () =>
            apiClient.getAll({
                params: {
                    genres: gameQuery.genre?.id,
                    parent_platforms: gameQuery.platform?.id,
                    ordering: gameQuery.sortOrder,
                    search: gameQuery.searchText,
                },
            }),
    })

export default useGames
