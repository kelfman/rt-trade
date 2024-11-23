<template>
  <div>
    <h2>Orders Table</h2>
    <table>
      <thead>
        <tr>
          <th>Security ID</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="order in store.orders" :key="order.symbol">
          <td>{{ order.symbol }}</td>
          <td>{{ order.quantity }}</td>
          <td>${{ order.price }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { useSecuritiesStore } from '@/stores/securities'

const store = useSecuritiesStore()
</script>
