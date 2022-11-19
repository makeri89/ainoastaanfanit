import { NextApiResponse, NextApiRequest } from 'next'
import S3 from 'aws-sdk/clients/s3'
import { unstable_getServerSession } from 'next-auth'
import { authOptions } from './auth/[...nextauth]'

const s3 = new S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_ACCESS_KEY,
  region: process.env.AWS_REGION,
  signatureVersion: 'v4',
})

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }
  const session = await unstable_getServerSession(req, res, authOptions)
  if (!session) {
    return res.status(401).json({ message: 'Unauthorized' })
  }
  try {
    const { name, type } = req.body

    const fileParams = {
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: name,
      Expires: 60,
      ContentType: type,
    }

    const url = await s3.getSignedUrlPromise('putObject', fileParams)

    res.status(200).json({ url })
  } catch (error) {
    console.log(error)
    res.status(400).json({ message: 'Something went wrong' })
  }
}

export default handler
