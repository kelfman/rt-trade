import { useSecuritiesStore } from '~/store/securities';

export default defineNuxtPlugin(() => {
  if (import.meta.client) {
    const ws = new WebSocket('wss://mock-realtime-securities.com');

    ws.onmessage = (event) => {
      const store = useSecuritiesStore();
      const updatedPrice = JSON.parse(event.data);
      // Update specific security data in state
      const index = store.securities.findIndex(
        (security) => security.id === updatedPrice.id
      );
      if (index !== -1) {
        store.securities[index].price = updatedPrice.price;
      }
    };

    ws.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    ws.onclose = () => {
      console.warn('WebSocket connection closed');
    };
  }
});
