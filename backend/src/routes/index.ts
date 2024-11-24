import type { Express } from 'express'
import type { Server } from 'socket.io'
import { initSecuritiesSocket, securitesRoutes } from './securities'

const routes = (app: Express, io: Server) => {
  app.use(securitesRoutes)
  initSecuritiesSocket(io)
}

export default routes
