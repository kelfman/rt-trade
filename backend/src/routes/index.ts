import type { Express } from 'express'
import securitesRoutes from './securities'

const routes = (app: Express) => {
  app.use(securitesRoutes)
}

export default routes
