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
  Flex,
  Spacer,
  Text,
} from '@chakra-ui/react'
import axios from 'axios'
import { useSession } from 'next-auth/react'
import { useLikes } from '../lib/hooks'

interface Props {
  image: { id: string; src: string; name: string; user: string }
  isOpen: boolean
  onClose: () => void
}

const ImageModal = ({ image, isOpen, onClose }: Props) => {
  const { data: session, status } = useSession()

  const { likes, error } = useLikes(image.id)

  const userHasLiked = likes?.find(
    (like: any) => like.user === session?.user?.email
  )

  const handleLike = () => {
    axios.post('/api/like', { image: image?.id, user: session?.user?.email })
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
          <Flex m="10px">
            {!!error ? (
              <Text>Tykkäyksiä ei voitu ladata</Text>
            ) : (
              <Text variant="dark">{likes?.length} tykkäystä</Text>
            )}
            <Spacer />
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
