import React, { useMemo, useEffect, useCallback } from 'react'
import { encode } from 'blurhash'

import FileInput from './FileInput'

const getClampedSize = (
  width: number,
  height: number,
  max: number
): { width: number; height: number } => {
  if (width >= height && width > max) {
    return { width: max, height: Math.round((height / width) * max) }
  }

  if (height > width && height > max) {
    return { width: Math.round((width / height) * max), height: max }
  }

  return { width, height }
}

const loadImage = async (src: string): Promise<HTMLImageElement> =>
  new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => resolve(img)
    img.onerror = (...args) => reject(args)
    img.src = src
  })

const getImageData = (
  image: HTMLImageElement,
  resolutionX: number,
  resolutionY: number
) => {
  const canvas = document.createElement('canvas')
  canvas.width = resolutionX
  canvas.height = resolutionY
  const context = canvas.getContext('2d')
  // @ts-ignore
  context.drawImage(image, 0, 0, resolutionX, resolutionY)
  // @ts-ignore
  return context.getImageData(0, 0, resolutionX, resolutionY)
}

interface Props {
  onChange: any
  data: any
  setData: any
}

const BlurhashImageEncoder: React.FunctionComponent<Props> = ({
  onChange,
  data,
  setData,
}) => {
  const blurhash = useMemo(
    () =>
      data
        ? encode(
            data.imageData.data,
            data.imageData.width,
            data.imageData.height,
            4,
            4
          )
        : undefined,
    [data]
  )

  useEffect(() => onChange(blurhash), [blurhash, onChange])

  const handleFileChange = useCallback(
    (file: File) => {
      const imageUrl = URL.createObjectURL(file)

      ;(async () => {
        const img = await loadImage(imageUrl)
        const clampedSize = getClampedSize(img.width, img.height, 64)
        const imageData = getImageData(
          img,
          clampedSize.width,
          clampedSize.height
        )

        setData({ file, imageUrl, imageData })
      })()
    },
    [setData]
  )

  return (
    <div>
      <FileInput onChange={handleFileChange} />
    </div>
  )
}

export default BlurhashImageEncoder
