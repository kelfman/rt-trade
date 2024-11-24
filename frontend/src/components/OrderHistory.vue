<template>
  <Panel class="panel" header="Order History" v-if="history.length > 0">
    <DataTable :value="history" tableStyle="min-width: 50rem">
      <Column field="symbol" header="Security" />
      <Column field="quantity" header="Quantity" />
      <Column field="price" header="Unit cost" />
      <Column field="total" header="Total cost" />
    </DataTable>
  </Panel>
</template>

<script setup lang="ts">
import { useSecuritiesStore } from '@/stores/securities'
import { rounded } from '@/util/math'
import { computed } from 'vue'

const store = useSecuritiesStore()

const history = computed(() =>
  store.orders.map((order) => ({
    ...order,
    quantity: rounded(order.quantity),
    total: rounded(order.price * order.quantity),
  })),
)
</script>

<style>
.panel {
  height: 100%;
}
</style>
