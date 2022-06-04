import type { NextApiRequest, NextApiResponse } from 'next'

export const config = {
  api: {
    bodyParser: false
  }
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // console.log(req)
  if (req.method === 'POST') {
    console.log(req.body.challenge)
    res.status(200).json({ challenge: req.body.challenge })
  } else {
    res.status(200)
  }
}