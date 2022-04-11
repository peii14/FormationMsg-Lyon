import dbConnect from '../../../utils/mongo'
import Guide from '../../../models/GuideMail'

dbConnect()

export default async (
  req: { body?: any; method?: any },
  res: {
    status: (arg0: number) => {
      (): any
      new (): any
      json: { (arg0: { success: boolean; data?: any }): void; new (): any }
    }
  }
) => {
  const { method } = req

  switch (method) {
    case 'GET':
      try {
        const offerGuide = await Guide.find({})
        res.status(200).json({ success: true, data: offerGuide })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'POST':  
      try {
        const offerGuide = await Guide.create(req.body)
        res.status(201).json({ success: true, data: offerGuide })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
  }
}
