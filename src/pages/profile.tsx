import { Heading } from '@chakra-ui/react'
import { useSession } from 'next-auth/react'
import LoginButton from '../components/LoginButton'

const Profile = () => {
  const { data: session, status } = useSession()

  return (
    <>
      <Heading>Profiili</Heading>
      {status === 'authenticated' ? (
        <>
          <p>Sähköposti: {session?.user?.email}</p>
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
