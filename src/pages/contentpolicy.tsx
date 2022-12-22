import Box from '@ui/atoms/Box'
import { H2, H3 } from '@ui/atoms/Heading'
import Text from '@ui/atoms/Text'

const ContentPolicy = () => {
  return (
    <Box css={{ maxWidth: 900 }}>
      <H2 css={{ margin: '0 20px' }}>Sisällön säännöt</H2>
      <H3>Sisältö</H3>
      <Text css={{ fontSize: '1.2rem' }}>
        Tämä sivusto on tarkoitettu kuville traktoreista ja muista
        maatalouskoneista.
      </Text>
      <H3 css={{ marginTop: 10 }}>Sisällön lisääminen</H3>
      <Text css={{ fontSize: '1.2rem' }}>
        Sivustolle voi lähettää sisältöä, joka on laillista ja joka ei riko
        tekijänoikeuksia.
      </Text>
      <Text css={{ fontSize: '1.2rem' }}>
        Sisältöä voi lisätä ainoastaan kirjautuneena. Jos olet asettanut
        itsellesi nimimerkin, se näkyy lisätyn kuvan yhteydessä.
      </Text>
    </Box>
  )
}

export default ContentPolicy
