export const parseFromMongo = (data: any[]) => {
  const BASE_URL = process.env.AWS_DOWNLOAD_BASE_URL
  return data.map((item) => {
    const { _id, name, description, ...rest } = item
    return {
      id: _id.toString(),
      src: `${BASE_URL}/${name}`,
      name: description,
      ...rest,
    }
  })
}