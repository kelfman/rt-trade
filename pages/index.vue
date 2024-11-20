<template>
  <div>
    <SecurityList />
    <SecurityDetails v-if="selectedSecurity" />
    <BuyFlow v-if="selectedSecurity" :selectedSecurity="selectedSecurity" />
    <OrdersTable />
  </div>
</template>

<script setup lang="ts">
import SecurityList from '~/components/SecurityList.vue';
import SecurityDetails from '~/components/SecurityDetails.vue';
import BuyFlow from '~/components/BuyFlow.vue';
import OrdersTable from '~/components/OrdersTable.vue';
import { useSecuritiesStore } from '~/store/securities';

const { selectedSecurity } = useSecuritiesStore();
</script>
