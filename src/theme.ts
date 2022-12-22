import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  fonts: {
    heading: `'Comic Neue', sans-serif`,
    body: `'Comic Neue', sans-serif`,
  },
  styles: {
    global: {
      body: {
        bg: 'primary',
        color: 'white',
      },
    },
  },
  colors: {
    primary: '#367C2B',
  },
  components: {
    Button: {
      variants: {
        green: {
          bg: 'primary',
          _hover: {
            bg: 'white',
            color: 'primary',
            border: '2px',
            borderColor: 'primary',
          },
        },
      },
    },
  },
})
