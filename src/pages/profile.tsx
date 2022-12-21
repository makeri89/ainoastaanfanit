import { Heading } from '@chakra-ui/react'
import { useSession } from 'next-auth/react'
import LoginButton from '../components/LoginButton'
import UserInfo from '../components/UserInfo'

const Profile = () => {
  const { data: session, status } = useSession()

  return (
    <>
      <Heading>Profiili</Heading>
      {status === 'authenticated' ? (
        <>
          <UserInfo user={session?.user} />
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
