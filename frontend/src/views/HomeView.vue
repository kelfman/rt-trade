<template>
  <SecurityList />
  <SecurityDetails v-if="store.selectedSecurity" />
  <BuyFlow v-if="store.selectedSecurity" />
  <OrdersTable />
</template>

<script setup lang="ts">
import SecurityList from '@/components/SecurityList.vue'
import SecurityDetails from '@/components/SecurityDetails.vue'
import BuyFlow from '@/components/BuyFlow.vue'
import OrdersTable from '@/components/OrdersTable.vue'
import { useSecuritiesStore } from '@/stores/securities'

const store = useSecuritiesStore()
</script>
