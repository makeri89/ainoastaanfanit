import EmailSubscribe from '@ui/EmailSubscribe'
import FileModal from '@ui/FileModal'
import { useSession } from 'next-auth/react'
import {
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuRoot,
} from './components'

const NavBar = () => {
  const { status } = useSession()

  return (
    <NavigationMenuRoot>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink href="/">Etusivu</NavigationMenuLink>
        </NavigationMenuItem>
        {status === 'authenticated' ? (
          <NavigationMenuItem>
            <NavigationMenuLink href="/profile">Profiili</NavigationMenuLink>
          </NavigationMenuItem>
        ) : (
          <NavigationMenuItem>
            <NavigationMenuLink href="/api/auth/signin">
              Kirjaudu sisään
            </NavigationMenuLink>
          </NavigationMenuItem>
        )}
        <NavigationMenuItem>
          <EmailSubscribe />
        </NavigationMenuItem>
        {status == 'authenticated' && (
          <NavigationMenuItem>
            <FileModal />
          </NavigationMenuItem>
        )}
      </NavigationMenuList>
    </NavigationMenuRoot>
  )
}

export default NavBar
