<template>
  <div v-if="selectedSecurity">
    <h2>{{ selectedSecurity.name }}</h2>
    <p>{{ selectedSecurity.description }}</p>
    <p>Current Price: ${{ selectedSecurity.price }}</p>
  </div>
</template>

<script setup lang="ts">
import { useSecuritiesStore } from '~/store/securities';

const { selectedSecurity } = useSecuritiesStore();
</script>
