<template>
  <Panel class="panel" :header="unstyled ? '' : 'Watch List'" :unstyled="unstyled">
    <div v-if="!store.watchList.length">Your watch list is empty</div>
    <div
      class="item"
      v-for="(security, index) in store.watchList"
      :key="security.symbol"
      @click="onSelect(security.symbol)"
    >
      <div class="itemHeader">{{ security.symbol }} - {{ security.name }}</div>
      <div class="itemRow">
        <div>Last</div>
        <div>{{ security.price }}</div>
      </div>
      <Divider v-if="index !== store.watchList.length - 1" />
    </div>
  </Panel>
</template>

<script setup lang="ts">
import { useSecuritiesStore } from '@/stores/securities'
import { onMounted } from 'vue'

defineProps<{
  unstyled?: boolean
}>()

const store = useSecuritiesStore()

const onSelect = (symbol: string) => {
  store.selectSecurity(symbol)
}

onMounted(async () => {
  await store.fetchSecurities()
  store.watchSecurities()
})
</script>

<style>
.panel {
  height: 100%;
  overflow: auto;
}

.item {
  cursor: pointer;
}

.itemHeader {
  font-size: medium;
}

.itemRow {
  display: flex;
  justify-content: space-between;
}
</style>
