import type { Security } from '@shared/types'
import { io } from 'socket.io-client'

export class WebSocket {
  private socket

  constructor() {
    this.socket = io('http://localhost:3001', {
      transports: ['websocket', 'polling'],
      withCredentials: true,
    })
  }

  connect(onPriceUpdate: (data: Security[]) => void) {
    this.socket.on('priceUpdate', (data) => {
      onPriceUpdate(data)
    })
  }
}
