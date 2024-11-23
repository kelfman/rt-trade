import cors from 'cors'
import type { Express } from 'express'
import express from 'express'
import authMiddleware from './middleware/auth'
import routes from './routes'

const app: Express = express()
const port = 3001

app.use(cors())

// Middleware to simulate JWT validation
app.use(authMiddleware)

// Set up routes
routes(app)

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})
