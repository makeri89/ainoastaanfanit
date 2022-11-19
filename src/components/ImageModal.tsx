import {
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Image,
  Heading,
} from '@chakra-ui/react'

interface Props {
  image: { src: string; name: string }
}

const ImageModal = ({ image }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Image
        src={image.src}
        alt="tractor"
        onClick={onOpen}
        h="200px"
        w="200px"
        objectFit="cover"
      />
      <Modal isOpen={isOpen} onClose={onClose} closeOnOverlayClick size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Heading color="black">{image.name}</Heading>
            <ModalCloseButton color="black" />
          </ModalHeader>
          <ModalBody>
            <Box margin="10px">
              <Image src={image.src} alt="Tractor" />
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ImageModal
