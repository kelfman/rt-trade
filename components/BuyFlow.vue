<template>
  <div v-if="selectedSecurity">
    <h3>Buy {{ selectedSecurity.name }}</h3>
    <input
      type="number"
      v-model="notionalAmount"
      placeholder="Enter amount in dollars"
    />
    <p>Quantity: {{ calculatedQuantity }}</p>
    <button @click="buySecurity">Buy</button>
  </div>
</template>

<script setup lang="ts">
import { useSecuritiesStore } from '~/store/securities';
import { computed, ref } from 'vue';
import type { Order } from '~/types/index';

const { addOrder, selectedSecurity } = useSecuritiesStore();

const notionalAmount = ref(0);

const calculatedQuantity = computed(() => {
  return selectedSecurity && selectedSecurity.price > 0
    ? notionalAmount.value / selectedSecurity.price
    : 0;
});

const buySecurity = () => {
  if (selectedSecurity && calculatedQuantity.value > 0) {
    const order: Order = {
      securityId: selectedSecurity.id,
      quantity: calculatedQuantity.value,
      price: selectedSecurity.price,
    };
    addOrder(order);
  }
};
</script>
