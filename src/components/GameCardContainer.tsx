import { Box } from "@chakra-ui/react"
import { ReactNode } from "react"

interface Props {
    children: ReactNode
}

const GameCardContainer = ({ children }: Props) => {
    return (
        // don't use fixed width, use 100% instead
        // otherwise, the ui will break on small screens
        <Box width='100%' borderRadius={10} overflow='hidden'>
            {children}
        </Box>
    )
}

export default GameCardContainer
