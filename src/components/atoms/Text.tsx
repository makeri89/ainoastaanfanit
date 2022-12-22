import { styled } from '@lib/stitches.config'

const Text = styled('p', {
  variants: {
    color: {
      base: {
        color: 'white',
      },
      dark: {
        color: 'black',
      },
    },
  },
  defaultVariants: {
    color: 'base',
  },
})

export default Text
