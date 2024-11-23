<template>
  <div v-if="store.selectedSecurity">
    <h3>Buy {{ store.selectedSecurity.name }}</h3>
    <input type="number" v-model="notionalAmount" placeholder="Enter amount in dollars" />
    <p>Quantity: {{ calculatedQuantity }}</p>
    <button @click="buySecurity">Buy</button>
  </div>
</template>

<script setup lang="ts">
import type { Order } from '@shared/types'
import { useSecuritiesStore } from '@/stores/securities'
import { computed, ref } from 'vue'

const store = useSecuritiesStore()

const notionalAmount = ref(0)

const calculatedQuantity = computed(() => {
  return store.selectedSecurity && store.selectedSecurity.price > 0
    ? notionalAmount.value / store.selectedSecurity.price
    : 0
})

const buySecurity = () => {
  if (store.selectedSecurity && calculatedQuantity.value > 0) {
    const order: Order = {
      symbol: store.selectedSecurity.symbol,
      quantity: calculatedQuantity.value,
      price: store.selectedSecurity.price,
    }
    store.addOrder(order)
  }
}
</script>
