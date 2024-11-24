import cors from 'cors'
import type { Express } from 'express'
import express from 'express'
import http from 'http'
import { Server } from 'socket.io'
import authMiddleware from './middleware/auth'
import routes from './routes'

const app: Express = express()
const port = 3001
const server = http.createServer(app)

app.use(cors())

const io = new Server(server)

// Middleware to simulate JWT validation
app.use(authMiddleware)

// Set up routes
routes(app, io)

server.listen(port, () => {
  console.log(`Listening on *:${port}`)
})
