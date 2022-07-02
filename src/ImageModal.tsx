import {
	Box,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	useDisclosure,
	Image,
} from '@chakra-ui/react'

interface Props {
	src: string
}

const ImageModal = ({ src }: Props) => {
	const { isOpen, onOpen, onClose } = useDisclosure()

	return (
		<>
			<Image src={src} alt="tractor" onClick={onOpen} h="200px" />
			<Modal isOpen={isOpen} onClose={onClose} closeOnOverlayClick size="xl">
				<ModalOverlay />
				<ModalContent>
					<ModalCloseButton />
					<ModalBody>
						<Box margin="10px">
							<Image src={src} alt="Tractor" />
						</Box>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	)
}

export default ImageModal
