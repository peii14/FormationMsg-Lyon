import dbConnect from '../../../utils/mongo'
import Guide from '../../../models/GuideMail'

const handler = async (req: any, res: any) => {
  const { method } = req

  await dbConnect()

  if (method === 'GET') {
    try {
      const guide = await Guide.find()
      res.status(200).json(guide)
    } catch (err) {
      res.status(500).json(err)
    }
  }
  if (method === 'POST') {
    try {
      const guide = await Guide.create(req.body)
      res.status(201).json(guide)
    } catch (err) {
      res.status(500).json(err)
    }
  }
}

export default handler
