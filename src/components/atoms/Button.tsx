import { styled } from '@lib/stitches.config'

const Button = styled('button', {
  all: 'unset',
  fontSize: '1.125rem',
  fontWeight: 'bold',
  color: 'white',
  backgroundColor: '$fanGreen',
  border: 'white 2px solid',
  borderRadius: '6px',
  padding: '0.25rem 0.5rem',
  '&:focus': { boxShadow: '0 0 0 2px #C92B2B' },
  '&:hover': { backgroundColor: '$fanRed', cursor: 'pointer' },
  textAlign: 'center',
})

export default Button
