import { styled } from '@lib/stitches.config'

const Input = styled('input', {
  all: 'unset',
  padding: 8,
  borderRadius: 8,
  border: '1px solid white',
  '&:focus': {
    outline: '2px solid $fanRed',
  },
  width: '100%',
})

export default Input
