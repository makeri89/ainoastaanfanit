import { Heading } from '@chakra-ui/react'
import NavBar from '@ui/NavBar'
import Flex from './atoms/Flex'

interface Props {
  children: React.ReactNode
}

const Wrapper = ({ children }: Props) => {
  return (
    <Flex
      css={{
        margin: 10,
        flexDirection: 'column',
        alignItems: 'center',
        gap: 10,
      }}
    >
      <Heading as="h1" fontSize="50px" mt="20px">
        Ainoastaan faneille
      </Heading>
      <NavBar />
      {children}
    </Flex>
  )
}

export default Wrapper
