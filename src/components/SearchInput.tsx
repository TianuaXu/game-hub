import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react"
import { useRef } from "react"
import { BsSearch } from "react-icons/bs"

interface Props {
    onSearch: (searchText: string) => void
}

const SearchInput = ({ onSearch }: Props) => {
    // useRef is a hook that returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.
    // ref doesn't trigger re-render
    const ref = useRef<HTMLInputElement>(null)
    return (
        <form
            onSubmit={(event) => {
                event.preventDefault()
                if (ref.current) {
                    onSearch(ref.current.value)
                }
            }}
        >
            <InputGroup>
                <InputLeftElement children={<BsSearch />} />
                <Input
                    ref={ref}
                    borderRadius={20}
                    placeholder='Search game...'
                    variant='filled'
                ></Input>
            </InputGroup>
        </form>
    )
}

export default SearchInput
