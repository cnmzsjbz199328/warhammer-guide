import { ChakraProvider } from "@chakra-ui/react"
import '../assets/styles.css'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp