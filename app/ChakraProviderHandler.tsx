import { ChakraProvider } from "@chakra-ui/react"

function ChakraProviderHandler({children}: any) {
  return (
    <ChakraProvider>{children}</ChakraProvider>
  )
}

export default ChakraProviderHandler