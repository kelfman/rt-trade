<template>
  <Panel class="panel" :header="title">
    <Button
      class="button"
      :label="isWatched ? '- Unwatch' : '+ Watch'"
      @click="onToggleWatch"
      size="small"
      outlined
    />
    <p>Last Price: ${{ store.selectedSecurity?.price }}</p>
    <p>P/E: 14.7</p>
    <p>52 Week High: 1245.52</p>

    <div class="buyFlow">
      <BuyFlow />
    </div>
  </Panel>
</template>

<script setup lang="ts">
import { useSecuritiesStore } from '@/stores/securities'
import BuyFlow from './BuyFlow.vue'
import { computed } from 'vue'

const store = useSecuritiesStore()

const isWatched = computed(() => {
  return store.watchListSymbols.includes(store.selectedSymbol!)
})

const onToggleWatch = () => {
  if (isWatched.value) {
    store.removeFromWatchList(store.selectedSymbol!)
  } else {
    store.addToWatchList(store.selectedSymbol!)
  }
}

const title = computed(() => `${store.selectedSecurity?.name} (${store.selectedSecurity?.symbol})`)
</script>

<style>
.panel {
  height: 100%;
  width: 100%;
  position: relative;
}

.button {
  margin-bottom: 1rem;
}

@media screen and (min-width: 800px) {
  .button {
    /* hack! */
    top: -2.5rem;
    float: right;
  }
}

.buyFlow {
  margin-top: 2rem;
}
</style>
