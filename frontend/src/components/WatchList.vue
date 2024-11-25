<template>
  <Panel class="panel" :header="unstyled ? '' : 'Watch List'" :unstyled="unstyled">
    <div v-if="!securitiesStore.watchList.length">Your watch list is empty</div>
    <div
      class="item"
      v-for="(security, index) in securitiesStore.watchList"
      :key="security.symbol"
      @click="onSelect(security.symbol)"
    >
      <div class="itemHeader">{{ security.symbol }} - {{ security.name }}</div>
      <div class="itemRow">
        <div>Last</div>
        <div>{{ security.price }}</div>
      </div>
      <Divider v-if="index !== securitiesStore.watchList.length - 1" />
    </div>
  </Panel>
</template>

<script setup lang="ts">
import { useSecuritiesStore } from '@/stores/securities'
import { onMounted } from 'vue'
import { useNavigationStore } from '@/stores/navigation'

defineProps<{
  unstyled?: boolean
}>()

const securitiesStore = useSecuritiesStore()
const navigationStore = useNavigationStore()

const onSelect = (symbol: string) => {
  securitiesStore.selectSecurity(symbol)
  navigationStore.selectTab('main')
}

onMounted(async () => {
  await securitiesStore.fetchSecurities()
  securitiesStore.watchSecurities()
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
