import type { NextApiRequest, NextApiResponse } from 'next'
import clientPromise from '../../lib/mongodb'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const client = await clientPromise
  const db = client.db(process.env.MONGODB_DATABASE)
  const image = await db.collection('images').insertOne(req.body)
  res.status(200).json(image)
}
