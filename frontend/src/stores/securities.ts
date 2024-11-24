import { apiGetSecurities } from '@/api/securities'
import initializeSocket from '@/services/socket'
import type { Order, Security } from '@shared/types'
import { defineStore } from 'pinia'

interface State {
  securities: Security[]
  orders: Order[]
  watchListSymbols: string[]
  selectedSymbol: string | null
}

export const useSecuritiesStore = defineStore('securities', {
  state: (): State => ({
    securities: [],
    orders: [],
    watchListSymbols: [],
    selectedSymbol: null,
  }),
  getters: {
    selectedSecurity(state) {
      if (!state.selectedSymbol) return null
      return state.securities.find((security) => security.symbol === state.selectedSymbol)
    },
    watchList(state) {
      return state.watchListSymbols.map(
        (_symbol) => state.securities.find((security) => security.symbol === _symbol)!,
      )
    },
  },
  actions: {
    async fetchSecurities() {
      try {
        const response = await apiGetSecurities()
        this.securities = response.data
      } catch (error) {
        console.error('Failed to fetch securities:', error)
      }
    },
    watchSecurities() {
      const socket = initializeSocket()

      socket.on('priceUpdate', (data: Security[]) => {
        this.securities = data
      })
    },
    addToWatchList(symbol: string) {
      if (this.watchListSymbols.includes(symbol)) return
      this.watchListSymbols.push(symbol)
    },
    removeFromWatchList(symbol: string) {
      this.watchListSymbols = this.watchListSymbols.filter((_symbol) => _symbol !== symbol)
    },
    selectSecurity(symbol: string) {
      this.selectedSymbol = symbol
    },
    addOrder(order: Order) {
      this.orders.push(order)
    },
  },
})
