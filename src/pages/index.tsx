import { Flex, Grid, Heading } from '@chakra-ui/react'
import FileInput from '../components/FileInput'
import ImageModal from '../components/ImageModal'
import { useSession } from 'next-auth/react'
import { GetServerSideProps } from 'next'
import clientPromise from '../lib/mongodb'
import { parseFromMongo } from '../lib/utils'

interface Props {
  images: any
}

const App = ({ images }: Props) => {
  const { status } = useSession()
  console.log(images)
  return (
    <Flex margin="0 10%" direction="column" align="center" gap="10px">
      <Heading as="h1" fontSize="50px" mt="20px">
        Ainoastaan faneille
      </Heading>
      {status === 'authenticated' && <FileInput />}
      <Grid gap={2} templateColumns={{ lg: '1fr 1fr 1fr', base: '1fr 1fr' }}>
        {images.map((image: any) => (
          <ImageModal key={image.name} image={image} />
        ))}
      </Grid>
    </Flex>
  )
}

export default App

export const getServerSideProps: GetServerSideProps = async (context) => {
  const client = await clientPromise
  const db = client.db(process.env.MONGODB_DATABASE)
  const images = await db.collection('images').find().toArray()
  return {
    props: {
      images: parseFromMongo(images),
    },
  }
}
