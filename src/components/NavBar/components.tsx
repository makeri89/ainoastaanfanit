import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import { styled } from '@lib/stitches.config'

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

export const NavigationMenuItem = NavigationMenu.Item
