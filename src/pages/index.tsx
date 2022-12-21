import { Grid, useDisclosure } from '@chakra-ui/react'
import Image from '../components/Image'
import { GetServerSideProps } from 'next'
import clientPromise from '../lib/mongodb'
import { parseUsersFromMongo, parseImagesFromMongo } from '../lib/utils'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import ImageModal from '../components/ImageModal'
import type { Image as ImageType, User } from '../lib/types'

interface Props {
  images: ImageType[]
  users: { [key: string]: User[] }
}

const App = ({ images, users }: Props) => {
  const router = useRouter()
  const [image, setImage] = useState<ImageType>()

  const { query } = router

  const { onOpen, onClose, isOpen } = useDisclosure()

  useEffect(() => {
    if (query.image) {
      setImage(images.find((i: ImageType) => i.id === query.image))
      onOpen()
    }
  }, [query.image, images, onOpen])

  const handleImageChange = (image: any) => {
    setImage(image)
    onOpen()
  }

  return (
    <>
      <Grid gap={2} templateColumns={{ lg: 'repeat(5, 1fr)', base: '1fr 1fr' }}>
        {images.map((image: ImageType) => (
          // eslint-disable-next-line jsx-a11y/alt-text
          <Image
            key={image.name}
            image={image}
            handleClick={() => handleImageChange(image)}
          />
        ))}
      </Grid>
      {image && (
        <ImageModal
          image={image}
          adder={users[image.user][0]}
          isOpen={isOpen}
          onClose={onClose}
        />
      )}
    </>
  )
}

export default App

export const getServerSideProps: GetServerSideProps = async () => {
  const client = await clientPromise
  const db = client.db(process.env.MONGODB_DATABASE)
  const images = await db.collection('images').find().toArray()
  const users = await db.collection('users').find().toArray()
  return {
    props: {
      images: parseImagesFromMongo(images),
      users: parseUsersFromMongo(users),
    },
  }
}
