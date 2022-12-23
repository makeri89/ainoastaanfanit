import { useSession } from 'next-auth/react'
import LoginButton from '../components/LoginButton'
import UserInfo from '../components/UserInfo'
import { signOut } from 'next-auth/react'
import Button from '@ui/atoms/Button'
import NavigationLink from '@ui/atoms/NavigationLink'
import Text from '@ui/atoms/Text'
import { H2 } from '@ui/atoms/Heading'

const Profile = () => {
  const { data: session, status } = useSession()

  return (
    <>
      <H2>Profiili</H2>
      {status === 'authenticated' ? (
        <>
          <UserInfo user={session?.user} />
          <NavigationLink href="contentpolicy">Sisällön säännöt</NavigationLink>
          <Button onClick={() => signOut()}>Kirjaudu ulos</Button>
        </>
      ) : (
        <>
          <Text>Et ole kirjautunut sisään.</Text>
          <LoginButton />
        </>
      )}
    </>
  )
}

export default Profile
