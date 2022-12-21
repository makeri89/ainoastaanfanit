import { useRouter } from 'next/router'
import Button from '@ui/atoms/Button'

const LoginButton = () => {
  const router = useRouter()

  const handleLogin = () => {
    router.push('/api/auth/signin')
  }

  return <Button onClick={handleLogin}>Kirjaudu sisään</Button>
}

export default LoginButton
