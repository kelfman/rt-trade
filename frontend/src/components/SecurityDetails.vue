<template>
  <div v-if="store.selectedSecurity">
    <h2>{{ store.selectedSecurity.name }}</h2>
    <p>{{ store.selectedSecurity.description }}</p>
    <p>Current Price: ${{ store.selectedSecurity.price }}</p>
  </div>
</template>

<script setup lang="ts">
import { useSecuritiesStore } from '@/stores/securities'

const store = useSecuritiesStore()
</script>
