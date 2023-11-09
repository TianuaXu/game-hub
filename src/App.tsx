import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react"
import { useState } from "react"
import GameGrid from "./components/GameGrid"
import GameHeading from "./components/GameHeading"
import GenreList from "./components/GenreList"
import NavBar from "./components/NavBar"
import PlatformSelector from "./components/PlatformSelector"
import SortSelector from "./components/SortSelector"
import { Genre } from "./hooks/useGenre"
import { Platform } from "./hooks/usePlatform"

export interface GameQuery {
    genre: Genre | null
    platform: Platform | null
    sortOrder: string
    searchText: string
}

function App() {
    const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)

    return (
        <Grid
            // responsive grid
            templateAreas={{
                base: `"nav" "main"`,
                lg: `"nav nav" "aside main"`, // 1024px
            }}
            templateColumns={{
                base: "1fr", // 1 fraction of the available space
                lg: "200px 1fr", // 200px and 1 fraction of the available space
            }}
        >
            <GridItem area={"nav"}>
                <NavBar onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })} />
            </GridItem>
            {/* show this only on large screens */}
            <Show above='lg'>
                <GridItem area={"aside"} paddingX={5}>
                    <GenreList
                        selectedGenre={gameQuery.genre}
                        onSelectGenre={(genre) => {
                            setGameQuery({ ...gameQuery, genre })
                        }}
                    />
                </GridItem>
            </Show>
            <GridItem area={"main"}>
                <Box paddingLeft={2}>
                    <GameHeading gameQuery={gameQuery} />
                    <Flex marginBottom={5}>
                        <Box marginRight={5}>
                            <PlatformSelector
                                selectedPlatform={gameQuery.platform}
                                onSelectPlatform={(platform) =>
                                    setGameQuery({ ...gameQuery, platform })
                                }
                            />
                        </Box>
                        <SortSelector
                            sortOrder={gameQuery.sortOrder}
                            onSelectSortOrder={(sortOrder) =>
                                setGameQuery({ ...gameQuery, sortOrder })
                            }
                        />
                    </Flex>
                </Box>
                <GameGrid gameQuery={gameQuery} />
            </GridItem>
        </Grid>
    )
}

export default App
