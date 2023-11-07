import { Button, HStack, Heading, Image, List, ListItem, Spinner } from "@chakra-ui/react"
import useGenre, { Genre } from "../hooks/useGenre"
import getCroppedImageUrl from "../services/image-url"

interface Props {
    onSelectGenre: (genre: Genre) => void
    selectedGenre: Genre | null
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
    const { data: genres, isLoading, error } = useGenre()

    if (error) return null

    if (isLoading) {
        return <Spinner />
    }

    return (
        <>
            <Heading fontSize='2xl' marginBottom={3}>
                Genres
            </Heading>
            <List>
                {genres?.results.map((genre) => (
                    <ListItem key={genre.id} paddingY='5px'>
                        <HStack>
                            <Image
                                boxSize='32px'
                                objectFit='cover'
                                borderRadius={8}
                                src={getCroppedImageUrl(genre.image_background)}
                            />
                            <Button
                                whiteSpace='normal'
                                textAlign='left'
                                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                                onClick={() => onSelectGenre(genre)}
                                fontSize='lg'
                                variant='link'
                            >
                                {genre.name}
                            </Button>
                        </HStack>
                    </ListItem>
                ))}
            </List>
        </>
    )
}

export default GenreList
