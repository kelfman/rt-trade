import type { Security } from '@shared/types'
import { Router, type Request, type Response } from 'express'

// Mock Data
const mockSecurities: Security[] = [
  { symbol: 'BHP', name: 'BHP Group', price: 0 },
  { symbol: 'CBA', name: 'Commonwealth Bank', price: 0 },
  { symbol: 'CSL', name: 'CSL Limited', price: 0 },
  { symbol: 'WBC', name: 'Westpac Banking Corp', price: 0 },
  { symbol: 'NAB', name: 'National Australia Bank', price: 0 },
  { symbol: 'ANZ', name: 'Australia and New Zealand Banking Group', price: 0 },
  { symbol: 'WOW', name: 'Woolworths Group', price: 0 },
  { symbol: 'WES', name: 'Wesfarmers', price: 0 },
  { symbol: 'MQG', name: 'Macquarie Group', price: 0 },
  { symbol: 'TLS', name: 'Telstra Corporation', price: 0 },
  { symbol: 'RIO', name: 'Rio Tinto', price: 0 },
  { symbol: 'WPL', name: 'Woodside Petroleum', price: 0 },
  { symbol: 'GMG', name: 'Goodman Group', price: 0 },
  { symbol: 'SCG', name: 'Scentre Group', price: 0 },
  { symbol: 'QAN', name: 'Qantas Airways', price: 0 },
  { symbol: 'ORG', name: 'Origin Energy', price: 0 },
  { symbol: 'STO', name: 'Santos', price: 0 },
  { symbol: 'S32', name: 'South32', price: 0 },
  { symbol: 'TCL', name: 'Transurban Group', price: 0 },
  { symbol: 'SGP', name: 'Stockland', price: 0 },
]

const getRandomPrice = (min: number = 10, max: number = 100): number => {
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

const fetchSecurities = (): Security[] => {
  return mockSecurities.map((security) => ({
    ...security,
    price: getRandomPrice(),
  }))
}

const securitesRoutes = Router()

securitesRoutes.route('/api/securities').get((req: Request, res: Response) => {
  res.json(fetchSecurities())
})

export default securitesRoutes
