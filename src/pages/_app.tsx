import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../theme'
import { Analytics } from '@vercel/analytics/react'
import '@fontsource/comic-neue'
import { SessionProvider } from 'next-auth/react'
import Wrapper from '../components/Wrapper'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <SessionProvider>
      <ChakraProvider theme={theme}>
        <Wrapper>
          <Component {...pageProps} />
          <Analytics />
        </Wrapper>
      </ChakraProvider>
    </SessionProvider>
  )
}

export default MyApp
