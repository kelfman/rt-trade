import type { Socket } from 'socket.io-client'
import { io } from 'socket.io-client'

let socket: Socket

const initializeSocket = (): Socket => {
  socket =
    socket ||
    io('http://localhost:3001', {
      transports: ['websocket', 'polling'],
      withCredentials: true,
    })

  socket.on('connect', () => {
    console.log('Socket connected')
  })

  socket.on('disconnect', () => {
    console.log('Socket disconnected')
  })

  return socket
}

export default initializeSocket
