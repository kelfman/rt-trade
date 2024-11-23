import cors from 'cors'
import type { Express, Request, Response } from 'express'
import express from 'express'

const app: Express = express()
const port = 3001

app.use(cors())

// Mock Data
const securities = [
  { id: '1', name: 'AAPL', price: 150, description: 'Apple Inc.' },
  { id: '2', name: 'GOOGL', price: 2800, description: 'Alphabet Inc.' },
  { id: '3', name: 'AMZN', price: 3450, description: 'Amazon.com Inc.' },
  { id: '4', name: 'INTEL', price: 2, description: 'Intel' },
]

// API Endpoints
app.get('/api/securities', (req: Request, res: Response) => {
  res.json(securities)
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})
