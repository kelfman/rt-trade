import axios from 'axios';
import { defineStore } from 'pinia';
import type { Order, Security } from '~/types';

interface State {
  orders: Order[];
  securities: Security[];
  selectedSecurity: Security | null;
}

export const useSecuritiesStore = defineStore('securities', {
  state: (): State => ({
    orders: [],
    securities: [],
    selectedSecurity: null,
  }),
  actions: {
    async fetchSecurities() {
      // Mock API call
      try {
        const response = await axios.get('/api/securities');
        this.securities = response.data;
      } catch (error) {
        console.error('Failed to fetch securities:', error);
      }
    },
    addOrder(order: Order) {
      this.orders.push(order);
    },
    selectSecurity(security: Security) {
      this.selectedSecurity = security;
    },
  },
});
