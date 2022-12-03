import { useCallback, useState } from 'react'
interface Props {
  onChange: any
}

const FileInput = ({ onChange }: Props) => {
  const [file, setFile] = useState<File | null>(null)

  const handleFileChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { files } = event.currentTarget
      // @ts-ignore
      const newFile = files[0]

      if (newFile !== file) {
        setFile(newFile)
        onChange(newFile)
      }
    },
    [file, onChange]
  )

  return (
    <>
      <label htmlFor="image">Valitse kuva</label>
      <input
        id="image"
        type="file"
        onChange={handleFileChange}
        accept="image/*"
      />
    </>
  )
}

export default FileInput
