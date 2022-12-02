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
import { useSession } from 'next-auth/react'

const FileInput = () => {
  const [desc, setDesc] = useState('')
  const [file, setFile] = useState<File | null>(null)
  const [showNotification, setShowNotification] = useState(false)

  const { isOpen, onOpen, onClose } = useDisclosure()

  const { data: session } = useSession()

  const handleFileChange = (e: any) => {
    setFile(e.target.files[0])
  }

  const handleDescChange = (e: any) => {
    setDesc(e.target.value)
  }

  const handleSubmit = async () => {
    if (!file) return
    const { data } = await axios.post('/api/uploadFile', {
      name: file.name,
      type: file.type,
    })

    const { url } = data

    await axios.put(url, file, {
      headers: {
        'Content-Type': file.type,
        'Access-Control-Allow-Origin': '*',
      },
    })

    await axios.post('/api/uploadMongo', {
      user: session?.user?.email,
      name: file.name,
      description: desc,
    })
    setDesc('')
    setFile(null)
    setShowNotification(true)
  }

  const handleClose = () => {
    setShowNotification(false)
    onClose()
  }

  return (
    <>
      <Button variant="outline" _hover={{ color: 'black' }} onClick={onOpen}>
        Lisää kuva
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg="primary">
          {showNotification ? (
            <div>
              <ModalHeader color="white">Kuva lisätty!</ModalHeader>
              <ModalFooter>
                <Button variant="outline" onClick={handleClose}>
                  Sulje
                </Button>
              </ModalFooter>
            </div>
          ) : (
            <Flex direction="column" gap="6px">
              <ModalHeader>Lisää kuva</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <label htmlFor="description">Kuvaus</label>
                <Input
                  type="text"
                  id="description"
                  value={desc}
                  onChange={handleDescChange}
                />
                <label htmlFor="image">Valitse kuva</label>
                <input id="image" type="file" onChange={handleFileChange} />
              </ModalBody>
              <ModalFooter>
                <Button
                  variant="outline"
                  _hover={{ color: 'black' }}
                  onClick={handleSubmit}
                >
                  Lähetä
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
