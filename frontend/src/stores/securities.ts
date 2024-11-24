import { apiGetSecurities } from '@/api/securities'
import { WebSocket } from '@/services/webSocket'
import type { Order, Security } from '@shared/types'
import { defineStore } from 'pinia'

export const useSecuritiesStore = defineStore('securities', {
  state: (): { securities: Security[]; orders: Order[]; selectedSecurity: Security | null } => ({
    securities: [],
    orders: [],
    selectedSecurity: null,
  }),
  actions: {
    async fetchSecurities() {
      // API call to Express server
      try {
        const response = await apiGetSecurities()
        this.securities = response.data
      } catch (error) {
        console.error('Failed to fetch securities:', error)
      }
    },
    addOrder(order: Order) {
      this.orders.push(order)
    },
    selectSecurity(security: Security) {
      this.selectedSecurity = security
    },
    initializeWebSocket() {
      const webSocket = new WebSocket()
      webSocket.connect((updatedSecurities: Security[]) => {
        this.securities = updatedSecurities
      })
    },
  },
})
