import Image from 'next/image'
import { Button } from '@chakra-ui/react'
import { Blurhash } from 'react-blurhash'

interface Props {
  image: { src: string; name: string; hash?: string }
  handleClick: () => void
}

const CustomImage = ({ image, handleClick }: Props) => {
  return (
    <Button
      w={{ base: '160px', lg: '200px' }}
      h={{ base: '160px', lg: '200px' }}
      position="relative"
      onClick={handleClick}
    >
      {image.hash && <Blurhash hash={image.hash} width="100%" height="100%" />}
      <Image
        alt="image of a tractor"
        src={image.src}
        fill
        style={{ objectFit: 'cover' }}
      />
    </Button>
  )
}

export default CustomImage
