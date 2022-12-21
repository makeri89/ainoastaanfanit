import NavigationLink from '@ui/atoms/NavigationLink'
import EmailSubscribe from '@ui/EmailSubscribe'
import FileModal from '@ui/FileModal'
import { useSession } from 'next-auth/react'
import {
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuRoot,
} from './components'

const NavBar = () => {
  const { status } = useSession()

  return (
    <NavigationMenuRoot>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationLink href="/">Etusivu</NavigationLink>
        </NavigationMenuItem>
        {status === 'authenticated' ? (
          <NavigationMenuItem>
            <NavigationLink href="/profile">Profiili</NavigationLink>
          </NavigationMenuItem>
        ) : (
          <NavigationMenuItem>
            <NavigationLink href="/api/auth/signin">
              Kirjaudu sisään
            </NavigationLink>
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
