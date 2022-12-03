import Image from 'next/image'
import { Box } from '@chakra-ui/react'

interface Props {
  image: { src: string; name: string; hash?: string }
  handleClick: () => void
}

const CustomImage = ({ image, handleClick }: Props) => {
  return (
    <Box w="200px" h="200px" position="relative">
      <Image
        alt="image of a tractor"
        src={image.src}
        fill
        style={{ objectFit: 'cover' }}
        onClick={handleClick}
        placeholder={image.hash ? 'blur' : 'empty'}
        blurDataURL={image.hash}
      />
    </Box>
  )
}

export default CustomImage
