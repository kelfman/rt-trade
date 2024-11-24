<template>
  <div>
    <h2>Watchlist</h2>
    <ul>
      <li v-for="security in store.securities" :key="security.symbol" @click="onSelect(security)">
        {{ security.name }} - ${{ security.price }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useSecuritiesStore } from '@/stores/securities'
import type { Security } from '@shared/types'
import { onMounted } from 'vue'

const store = useSecuritiesStore()

const onSelect = (security: Security) => {
  console.log('select', security)
  store.selectSecurity(security)
}

onMounted(async () => {
  await store.fetchSecurities()
  store.initializeWebSocket()
})
</script>
