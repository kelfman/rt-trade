<template>
  <div>
    <h2>Watchlist</h2>
    <ul>
      <li
        v-for="security in store.securities"
        :key="security.id"
        @click="store.selectSecurity(security)"
      >
        {{ security.name }} - ${{ security.price }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useSecuritiesStore } from '@/stores/securities'
import { onMounted } from 'vue'

const store = useSecuritiesStore()

onMounted(async () => {
  await store.fetchSecurities()
})
</script>
