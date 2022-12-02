import { Button } from '@chakra-ui/react'
import { useRouter } from 'next/router'

const LoginButton = () => {
  const router = useRouter()

  const handleLogin = () => {
    router.push('/api/auth/signin')
  }

  return (
    <Button variant="outline" onClick={handleLogin}>
      Kirjaudu sisään
    </Button>
  )
}

export default LoginButton
