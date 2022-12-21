import {
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
import BlurhashImageEncoder from './BlurHashImageEncoder'
import Button from './atoms/Button'

const FileModal = () => {
  const [desc, setDesc] = useState('')
  const [data, setData] = useState<
    { file: File; imageUrl: string; imageData: ImageData } | undefined
  >()
  const [encodedHash, setEncodedHash] = useState('')

  const { isOpen, onOpen, onClose } = useDisclosure()

  const { data: session } = useSession()

  const handleDescChange = (e: any) => {
    setDesc(e.target.value)
  }

  const handleSubmit = async () => {
    if (!data) return
    const { data: s3Data } = await axios.post('/api/uploadFile', {
      name: data.file.name,
      type: data.file.type,
    })

    const { url } = s3Data

    await axios.put(url, data.file, {
      headers: {
        'Content-Type': data.file.type,
        'Access-Control-Allow-Origin': '*',
      },
    })

    await axios.post('/api/uploadMongo', {
      user: session?.user?.email,
      name: data.file.name,
      description: desc,
      hash: encodedHash,
    })
    setDesc('')
    setData(undefined)
  }

  return (
    <>
      <Button onClick={onOpen}>Lisää kuva</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg="primary">
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
              <BlurhashImageEncoder
                onChange={(hash: any) => setEncodedHash(hash)}
                data={data}
                setData={setData}
              />
            </ModalBody>
            <ModalFooter>
              <Button onClick={handleSubmit}>Lähetä</Button>
            </ModalFooter>
          </Flex>
        </ModalContent>
      </Modal>
    </>
  )
}

export default FileModal
