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
      baseStyle: {
        fontWeight: 'bold',
      },
      variants: {
        outline: {
          border: '2px',
          _hover: {
            bg: 'primary',
            color: 'black',
          },
        },
        green: {
          bg: 'primary',
          _hover: {
            bg: 'white',
            color: 'primary',
            border: '2px',
            borderColor: 'primary',
          },
        },
        disabled: {
          bg: 'white',
          color: 'primary',
          borderColor: 'primary',
          border: '2px',
        },
      },
    },
    Text: {
      variants: {
        dark: {
          color: 'black',
        },
      },
    },
  },
})
