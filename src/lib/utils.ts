import axios, { AxiosRequestConfig } from 'axios'
import { group } from 'radash'
import type { Image } from './types'

export const parseImagesFromMongo = (data: any[]): Image[] => {
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

export const parseUsersFromMongo = (data: any[]) => {
  const users = data.map((item) => {
    const { _id, emailVerified, ...rest } = item
    return {
      id: _id.toString(),
      ...rest,
    }
  })
  return group(users, (user) => user.email)
}

export const fetcher = (url: string, config?: AxiosRequestConfig) =>
  axios.get(url, config).then((res) => res.data)
