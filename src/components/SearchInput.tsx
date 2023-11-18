import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react"
import { useRef } from "react"
import { BsSearch } from "react-icons/bs"
import useGameQueryStore from "../store"
import { useNavigate } from "react-router-dom"

const SearchInput = () => {
  // useRef is a hook that returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.
  // ref doesn't trigger re-render
  const ref = useRef<HTMLInputElement>(null)
  // the only dependency is setSearchText
  const setSearchText = useGameQueryStore((s) => s.setSearchText)

  const navigate = useNavigate()
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        if (ref.current) {
          setSearchText(ref.current.value)
          navigate("/")
        }
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input ref={ref} borderRadius={20} placeholder='Search game...' variant='filled'></Input>
      </InputGroup>
    </form>
  )
}

export default SearchInput
