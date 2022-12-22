import { Input, Text } from '@chakra-ui/react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Button from './atoms/Button'
import Flex from './atoms/Flex'
import Toast from './atoms/Toast'

interface Props {
  user?: any
}

const UserInfo = ({ user }: Props) => {
  const { email, name: oldName } = user
  const [name, setName] = useState('')
  const [toastOpen, setToastOpen] = useState(false)

  useEffect(() => {
    if (oldName) setName(oldName)
  }, [oldName])

  const handleChange = (e: any) => {
    setName(e.target.value)
  }

  const handleSubmit = async () => {
    await axios.post('/api/updateUser', {
      email,
      name,
    })
    setToastOpen(true)
  }

  return (
    <Flex css={{ flexDirection: 'column', gap: 10 }}>
      <Text>Sähköposti: {email}</Text>
      <label htmlFor="name">
        <Text>Vaihda käyttäjätunnus:</Text>
      </label>
      <Input
        id="name"
        placeholder="Tunnus"
        onChange={handleChange}
        value={name}
        bg="white"
        color="black"
      />
      <Button onClick={handleSubmit}>Tallenna</Button>
      <Toast
        isOpen={toastOpen}
        onOpenChange={setToastOpen}
        title="Tiedot päivitetty"
        message="Tiedot päivitetty onnistuneesti"
      />
    </Flex>
  )
}

export default UserInfo
