<template>
  <div v-if="store.selectedSecurity">
    <div class="title">Notitonal dollar amount:</div>
    <div>
      <div class="inputRow">
        <InputNumber
          v-model="notionalAmount"
          inputId="minmaxfraction"
          :maxFractionDigits="2"
          :min="0"
        />
        <Button
          class="buyButton"
          @click="buySecurity"
          :disabled="calculatedQuantity === 0"
          label="Buy"
        />
      </div>
      <div class="quantity">Quantity: {{ calculatedQuantity }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
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
  if (!store.selectedSecurity || calculatedQuantity.value <= 0) return

  store.addOrder({
    symbol: store.selectedSecurity.symbol,
    quantity: calculatedQuantity.value,
    price: store.selectedSecurity.price,
  })
}
</script>

<style>
.inputRow {
  display: flex;
  margin-top: 0.5rem;
}

.title {
  font-weight: bold;
  font-size: large;
}

.buyButton {
  margin-left: 0.5rem;
}

.quantity {
  margin-top: 0.5rem;
}
</style>
