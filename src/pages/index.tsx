import { Button, Flex, Grid, useDisclosure } from '@chakra-ui/react'
import EmailSubscribe from '../components/EmailSubscribe'
import FileModal from '../components/FileModal'
import Image from '../components/Image'
import { useSession } from 'next-auth/react'
import { GetServerSideProps } from 'next'
import clientPromise from '../lib/mongodb'
import { parseFromMongo } from '../lib/utils'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import ImageModal from '../components/ImageModal'
import LoginButton from '../components/LoginButton'

interface Props {
  images: any
}

const App = ({ images }: Props) => {
  const { status } = useSession()
  const router = useRouter()
  const [image, setImage] = useState(undefined)

  const { query } = router

  const { onOpen, onClose, isOpen } = useDisclosure()

  useEffect(() => {
    if (query.image) {
      setImage(images.find((i: any) => i.id === query.image))
      onOpen()
    }
  }, [query.image, images, onOpen])

  const handleImageChange = (image: any) => {
    setImage(image)
    onOpen()
  }

  return (
    <>
      <Flex gap="10px">
        {status === 'authenticated' ? <FileModal /> : <LoginButton />}
        {status === 'authenticated' && (
          <Button variant="outline" onClick={() => router.push('/profile')}>
            Profiili
          </Button>
        )}
        <EmailSubscribe />
      </Flex>
      <Grid gap={2} templateColumns={{ lg: 'repeat(5, 1fr)', base: '1fr 1fr' }}>
        {images.map((image: any) => (
          // eslint-disable-next-line jsx-a11y/alt-text
          <Image
            key={image.name}
            image={image}
            handleClick={() => handleImageChange(image)}
          />
        ))}
      </Grid>
      {image && <ImageModal image={image} isOpen={isOpen} onClose={onClose} />}
    </>
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
