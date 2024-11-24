<template>
  <AutoComplete
    fluid
    v-model="query"
    :suggestions="matches"
    completeOnFocus
    @focus="onFocus"
    @change="onChange"
    @option-select="onSelect"
    placeholder="Find a security"
    size="large"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useSecuritiesStore } from '@/stores/securities'
import type { AutoCompleteChangeEvent, AutoCompleteOptionSelectEvent } from 'primevue'

const store = useSecuritiesStore()

const query = ref('')
const matches = ref<string[]>([])

const onFocus = () => {
  if (query.value === '') {
    matches.value = store.securities.map((security) => security.name).sort()
  }
}

const onChange = (event: AutoCompleteChangeEvent) => {
  const nextMatches: string[] = []

  store.securities.forEach((security) => {
    if (security.name.toLowerCase().includes(event.value.toLowerCase())) {
      nextMatches.push(security.name)
    }
  })

  matches.value = nextMatches.sort()
}

const onSelect = (event: AutoCompleteOptionSelectEvent) => {
  const security = store.securities.find(
    (security) => security?.name.toLowerCase() === event.value.toLowerCase(),
  )
  if (security) {
    store.selectSecurity(security.symbol)
  }
  // Why won't this work synchronously??
  requestAnimationFrame(() => {
    query.value = ''
  })
}
</script>
