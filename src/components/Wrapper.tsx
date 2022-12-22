import NavBar from '@ui/NavBar'
import Flex from '@ui/atoms/Flex'
import { H1 } from '@ui/atoms/Heading'

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
      <H1 css={{ marginTop: 20, fontWeight: 'bold' }}>Ainoastaan faneille</H1>
      <NavBar />
      {children}
    </Flex>
  )
}

export default Wrapper
