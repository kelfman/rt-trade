<template>
  <div>
    <h2>Watchlist</h2>
    <ul>
      <li
        v-for="security in securities"
        :key="security.id"
        @click="selectSecurity(security)"
      >
        {{ security.name }} - ${{ security.price }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useSecuritiesStore } from '~/store/securities';
import { onMounted } from 'vue';

const { securities, selectSecurity, fetchSecurities } = useSecuritiesStore();

onMounted(async () => {
  await fetchSecurities();
});
</script>
