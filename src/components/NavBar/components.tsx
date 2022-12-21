import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import { styled } from '@lib/stitches.config'
import Link from 'next/link'

export const NavigationMenuRoot = styled(NavigationMenu.Root, {
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  width: '100vw',
  zIndex: 1,
  flexWrap: 'wrap',
})

export const NavigationMenuList = styled(NavigationMenu.List, {
  display: 'flex',
  justifyContent: 'center',
  padding: 4,
  borderRadius: 6,
  listStyle: 'none',
  margin: 0,
  gap: 10,
})

export const NavigationMenuLink = styled(Link, {
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

export const NavigationMenuItem = NavigationMenu.Item
