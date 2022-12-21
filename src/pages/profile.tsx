import { Heading } from '@chakra-ui/react'
import { useSession } from 'next-auth/react'
import LoginButton from '../components/LoginButton'
import UserInfo from '../components/UserInfo'
import { signOut } from 'next-auth/react'
import Button from '@ui/atoms/Button'
import NavigationLink from '@ui/atoms/NavigationLink'

const Profile = () => {
  const { data: session, status } = useSession()

  return (
    <>
      <Heading>Profiili</Heading>
      {status === 'authenticated' ? (
        <>
          <UserInfo user={session?.user} />
          <NavigationLink href="contentpolicy">Sisällön säännöt</NavigationLink>
          <Button onClick={() => signOut()}>Kirjaudu ulos</Button>
        </>
      ) : (
        <>
          <p>Et ole kirjautunut sisään</p>
          <LoginButton />
        </>
      )}
    </>
  )
}

export default Profile
