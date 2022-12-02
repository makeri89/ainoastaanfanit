import { Button, Flex, Input, Text } from '@chakra-ui/react'
import axios from 'axios'
import { useEffect, useState } from 'react'

interface Props {
  user?: any
}

const UserInfo = ({ user }: Props) => {
  const { email, name: oldName } = user
  const [name, setName] = useState('')

  console.log(user)

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
  }

  return (
    <Flex direction="column" gap="10px">
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
      <Button variant="outline" onClick={handleSubmit}>
        Tallenna
      </Button>
    </Flex>
  )
}

export default UserInfo
