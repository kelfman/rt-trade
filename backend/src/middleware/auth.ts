import { NextFunction, Request, Response } from 'express'

const MOCK_JWT_TOKEN = 'mock_jwt_token'

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization

  if (authHeader !== `BEARER ${MOCK_JWT_TOKEN}`) {
    res.status(401).json({ error: 'Unauthorized' })
    return
  }

  // Optionally verify the token here (e.g., using a library like jsonwebtoken)
  // jwt.verify(token, secret, (err, decoded) => {
  //   if (err) {
  //     return res.status(403).json({ error: 'Forbidden' });
  //   }
  //   req.user = decoded; // Assuming you want to attach the decoded user information
  // });

  // Allow the request to proceed if the token is valid
  next()
}

export default authMiddleware
