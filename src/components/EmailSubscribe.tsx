import {
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
import Button from './atoms/Button'
import Flex from './atoms/Flex'
import Input from './atoms/Input'

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
      <Button onClick={onOpen}>Tilaa</Button>
      <Modal isOpen={isOpen} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent bg="primary">
          {showNotification ? (
            <div>
              <ModalHeader color="white">Kiitos tilauksesta!</ModalHeader>
              <ModalFooter>
                <Button onClick={handleClose}>Sulje</Button>
              </ModalFooter>
            </div>
          ) : (
            <Flex css={{ flexDirection: 'column', gap: 6, paddingRight: 15 }}>
              <ModalHeader>Tilaa päivittäinen kuva sähköpostiisi</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <label htmlFor="email">Sähköposti</label>
                <Input
                  type="email"
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
                  css={{ marginTop: 8, display: 'block' }}
                />
              </ModalBody>
              <ModalFooter>
                <Button onClick={handleSubmit}>Vahvista</Button>
              </ModalFooter>
            </Flex>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}

export default FileInput
