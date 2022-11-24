import { Image } from '@chakra-ui/react'

interface Props {
  image: { src: string; name: string }
  handleClick: () => void
}

const CustomImage = ({ image, handleClick }: Props) => {
  return (
    <Image
      src={image.src}
      alt="tractor"
      onClick={handleClick}
      h="200px"
      w="200px"
      objectFit="cover"
    />
  )
}

export default CustomImage
