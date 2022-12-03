import useSWR from 'swr'
import { fetcher } from '../utils'

export const useLikes = (image: string, options?: any) => {
  const { data, error } = useSWR(
    `/api/getLikesByImage?image=${image}`,
    fetcher,
    options
  )
  return {
    likes: data,
    isLoading: !error && !data,
    error: error,
  }
}
