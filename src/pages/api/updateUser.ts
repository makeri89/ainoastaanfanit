import type { NextApiRequest, NextApiResponse } from 'next'
import clientPromise from '../../lib/mongodb'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') return res.status(405).end()
  const client = await clientPromise
  const db = client.db(process.env.MONGODB_DATABASE)
  const image = await db
    .collection('users')
    .updateOne({ email: req.body.email }, { $set: { ...req.body } })
  res.status(200).json(image)
}
