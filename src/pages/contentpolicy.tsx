import { Box, Button, Heading, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'

const ContentPolicy = () => {
  const router = useRouter()

  const handleFrontPage = () => {
    router.push('/')
  }

  return (
    <Box maxW="900px">
      <Button variant="outline" onClick={handleFrontPage}>
        Etusivu
      </Button>
      <Heading my="20px">Sisällön säännöt</Heading>
      <Heading as="h3" fontSize="1.5rem">
        Sisältö
      </Heading>
      <Text fontSize="1.2rem">
        Tämä sivusto on tarkoitettu kuville traktoreista ja muista
        maatalouskoneista.
      </Text>
      <Heading as="h3" fontSize="1.5rem" mt="10px">
        Sisällön lisääminen
      </Heading>
      <Text fontSize="1.2rem">
        Sivustolle voi lähettää sisältöä, joka on laillista ja joka ei riko
        tekijänoikeuksia.
      </Text>
      <Text fontSize="1.2rem">
        Sisältöä voi lisätä ainoastaan kirjautuneena. Jos olet asettanut
        itsellesi nimimerkin, se näkyy lisätyn kuvan yhteydessä.
      </Text>
    </Box>
  )
}

export default ContentPolicy
