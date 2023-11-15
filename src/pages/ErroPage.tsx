import { Box, Heading, Text } from "@chakra-ui/react"
import { isRouteErrorResponse, useRouteError } from "react-router-dom"
import NavBar from "../components/NavBar"

const ErroPage = () => {
  const error = useRouteError()
  return (
    <>
      <NavBar />
      <Box padding={5}>
        <Heading>Oops</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "Thisp page does not exist."
            : "An unexpected error occurred."}
        </Text>
      </Box>
    </>
  )
}

export default ErroPage
