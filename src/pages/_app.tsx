import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../theme'
import { Analytics } from '@vercel/analytics/react'
import '@fontsource/comic-neue'
import { SessionProvider } from 'next-auth/react'
import Wrapper from '../components/Wrapper'
import Head from 'next/head'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <SessionProvider>
      <Head>
        <title>Ainoastaan fanit</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#367c2b" />
        <meta name="msapplication-TileColor" content="#367c2b" />
        <meta name="theme-color" content="#367c2b" />
      </Head>
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
