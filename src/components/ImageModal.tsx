import {
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Image,
  Heading,
  Button,
  Text,
} from '@chakra-ui/react'
import axios from 'axios'
import { useSession } from 'next-auth/react'
import { useLikes } from '../lib/hooks'
import { useSWRConfig } from 'swr'
import { useEffect, useState } from 'react'
import type { Image as ImageType, User } from '../lib/types'
import Flex from './atoms/Flex'

interface Props {
  image: ImageType
  isOpen: boolean
  onClose: () => void
  adder: User
}

const ImageModal = ({ image, isOpen, onClose, adder }: Props) => {
  const { data: session, status } = useSession()

  const { likes, error } = useLikes(image.id)

  const { mutate } = useSWRConfig()

  const [userHasLiked, setUserHasLiked] = useState(false)

  useEffect(() => {
    if (likes) {
      setUserHasLiked(
        likes.find((like: any) => like.user === session?.user?.email)
      )
    }
  }, [likes, session?.user?.email])

  const handleLike = () => {
    axios.post('/api/like', { image: image.id, user: session?.user?.email })
    mutate(`/api/getLikesByImage?image=${image.id}`)
    setUserHasLiked(true)
    likes.length++
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} closeOnOverlayClick size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Heading color="black">{image?.name}</Heading>
          <ModalCloseButton color="black" />
        </ModalHeader>
        <ModalBody>
          <Box margin="10px">
            <Image src={image?.src} alt="Tractor" />
          </Box>
          <Flex css={{ margin: 10, justifyContent: 'space-between' }}>
            {!!error ? (
              <Text>Tykkäyksiä ei voitu ladata</Text>
            ) : (
              <Text variant="dark">{likes?.length} tykkäystä</Text>
            )}
            {adder.name && (
              <Text variant="dark">Kuvan lisäsi: {adder.name}</Text>
            )}
            {status === 'authenticated' && (
              <>
                {userHasLiked ? (
                  <Button variant="disabled" onClick={handleLike} disabled>
                    Tykkäsit jo
                  </Button>
                ) : (
                  <Button variant="green" onClick={handleLike}>
                    Tykkää
                  </Button>
                )}
              </>
            )}
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default ImageModal
