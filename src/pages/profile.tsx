import { Button, Flex, Heading } from '@chakra-ui/react'
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

  const handleContentPolicy = () => {
    router.push('/contentpolicy')
  }

  return (
    <>
      <Heading>Profiili</Heading>
      <Flex gap="10px">
        <Button variant="outline" onClick={handleFrontPage}>
          Etusivu
        </Button>
        <Button variant="outline" onClick={handleContentPolicy}>
          Sisällön säännöt
        </Button>
      </Flex>
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
