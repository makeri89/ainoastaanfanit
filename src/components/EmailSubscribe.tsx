import {
  Button,
  Flex,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  ModalFooter,
} from '@chakra-ui/react'
import { useState } from 'react'
import axios from 'axios'

const FileInput = () => {
  const [email, setEmail] = useState('')
  const [showNotification, setShowNotification] = useState(false)

  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value)
  }

  const handleSubmit = async () => {
    await axios.post('/api/subscribe', {
      email,
    })
    setEmail('')
    setShowNotification(true)
  }

  const handleClose = () => {
    setShowNotification(false)
    onClose()
  }

  return (
    <>
      <Button variant="outline" _hover={{ color: 'black' }} onClick={onOpen}>
        Tilaa
      </Button>
      <Modal isOpen={isOpen} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent bg="primary">
          {showNotification ? (
            <div>
              <ModalHeader color="white">Kiitos tilauksesta!</ModalHeader>
              <ModalFooter>
                <Button variant="outline" onClick={handleClose}>
                  Sulje
                </Button>
              </ModalFooter>
            </div>
          ) : (
            <Flex direction="column" gap="6px">
              <ModalHeader>Tilaa päivittäinen kuva sähköpostiisi</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <label htmlFor="email">Sähköposti</label>
                <Input
                  type="email"
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
                />
              </ModalBody>
              <ModalFooter>
                <Button
                  variant="outline"
                  _hover={{ color: 'black' }}
                  onClick={handleSubmit}
                >
                  Vahvista
                </Button>
              </ModalFooter>
            </Flex>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}

export default FileInput
