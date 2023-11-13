import { HStack, Image } from "@chakra-ui/react"
import logo from "../assets/logo.webp"
import ColorModeSwitch from "./ColorModeSwitch"
import SearchInput from "./SearchInput"

const NavBar = () => {
    return (
        // HStack is a horizontal stack
        <HStack padding='10px'>
            {/* boxSize is a shorthand for width and height */}
            <Image src={logo} boxSize='60px' />
            <SearchInput />
            <ColorModeSwitch />
        </HStack>
    )
}

export default NavBar
