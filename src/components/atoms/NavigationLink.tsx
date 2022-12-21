import Link from 'next/link'
import { styled } from '@lib/stitches.config'

const NavigationLink = styled(Link, {
  display: 'block',
  textDecoration: 'none',
  fontSize: '1.125rem',
  lineHeight: 1,
  padding: '8px 12px',
  outline: 'none',
  userSelect: 'none',
  fontWeight: 'bold',
  border: 'solid 2px white',
  borderRadius: 6,
  '&:focus': { boxShadow: '0 0 0 2px #C92B2B' },
  '&:hover': { backgroundColor: '$fanRed' },
})

export default NavigationLink
