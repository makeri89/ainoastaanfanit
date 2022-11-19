import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../theme'

import '@fontsource/comic-neue'
import { SessionProvider } from 'next-auth/react'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <SessionProvider>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </SessionProvider>
  )
}

export default MyApp
