import { Heading } from "@chakra-ui/react"
import { GameQuery } from "../App"
import useGenre from "../hooks/useGenre"
import usePlatform from "../hooks/usePlatform"

interface Props {
    gameQuery: GameQuery
}

const GameHeading = ({ gameQuery }: Props) => {
    const { data: genres } = useGenre()
    const genre = genres?.results.find((genre) => genre.id === gameQuery.genreId)

    const { data: platforms } = usePlatform()
    const platform = platforms?.results.find((platform) => platform.id === gameQuery.platformId)

    const heading = `${platform?.name || ""} ${genre?.name || ""} Game`
    return (
        <Heading as='h1' marginY={5} fontSize='5xl'>
            {heading}
        </Heading>
    )
}

export default GameHeading
