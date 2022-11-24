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
} from '@chakra-ui/react'

interface Props {
  image?: { src: string; name: string }
  isOpen: boolean
  onClose: () => void
}

const ImageModal = ({ image, isOpen, onClose }: Props) => {
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
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default ImageModal
