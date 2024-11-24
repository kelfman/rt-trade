import { Router, type Request, type Response } from 'express'
import type { Server } from 'socket.io'
import { getInitialSecurities, getUpdatedSecurities } from '../services/securities'

export const securitesRoutes = Router()

securitesRoutes.route('/api/securities').get((req: Request, res: Response) => {
  res.json(getInitialSecurities())
})

export const initSecuritiesSocket = (io: Server) => {
  io.on('connection', (socket) => {
    console.log('Socket connected', socket.id)

    // Send price updates every second
    setInterval(() => {
      socket.emit('priceUpdate', getUpdatedSecurities())
    }, 1000)

    socket.on('disconnect', () => {
      console.log('Socket disconnected')
    })
  })
}
