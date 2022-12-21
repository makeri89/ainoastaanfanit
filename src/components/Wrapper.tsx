import { Flex, Heading } from '@chakra-ui/react'
import NavBar from '@ui/NavBar'

interface Props {
  children: React.ReactNode
}

const Wrapper = ({ children }: Props) => {
  return (
    <Flex margin="0 10%" direction="column" align="center" gap="10px">
      <Heading as="h1" fontSize="50px" mt="20px">
        Ainoastaan faneille
      </Heading>
      <NavBar />
      {children}
    </Flex>
  )
}

export default Wrapper
