import { Button, Heading } from '@chakra-ui/react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import LoginButton from '../components/LoginButton'
import UserInfo from '../components/UserInfo'

const Profile = () => {
  const { data: session, status } = useSession()
  const router = useRouter()

  const handleFrontPage = () => {
    router.push('/')
  }

  return (
    <>
      <Heading>Profiili</Heading>
      <Button variant="outline" onClick={handleFrontPage}>
        Etusivu
      </Button>
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
