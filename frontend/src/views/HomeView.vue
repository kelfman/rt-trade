<template>
  <div class="layout" v-if="isLargeScreen">
    <div class="left"><WatchList /></div>
    <div class="main">
      <div class="search">
        <SearchSecurities />
      </div>
      <div class="securityDetails">
        <SecurityDetails v-if="securitiesStore.selectedSecurity" />
      </div>
      <div class="orderHistory">
        <OrderHistory />
      </div>
    </div>
  </div>

  <div class="layoutSmall" v-if="!isLargeScreen">
    <Tabs v-model:value="nanvigationStore.selectedTab">
      <TabList>
        <Tab value="main">Main</Tab>
        <Tab value="watchList">Watch List</Tab>
        <Tab value="orderHistory">Order History</Tab>
      </TabList>
      <TabPanels>
        <TabPanel value="main">
          <div class="search">
            <SearchSecurities />
          </div>
          <SecurityDetails v-if="securitiesStore.selectedSecurity" />
        </TabPanel>
        <TabPanel value="watchList">
          <WatchList unstyled />
        </TabPanel>
        <TabPanel value="orderHistory">
          <OrderHistory unstyled />
        </TabPanel>
      </TabPanels>
    </Tabs>
  </div>
</template>

<script setup lang="ts">
import WatchList from '@/components/WatchList.vue'
import SecurityDetails from '@/components/SecurityDetails.vue'
import OrderHistory from '@/components/OrderHistory.vue'
import { useSecuritiesStore } from '@/stores/securities'
import SearchSecurities from '@/components/SearchSecurities.vue'
import { useMediaQuery } from '@vueuse/core'
import { useNavigationStore } from '@/stores/navigation'

const securitiesStore = useSecuritiesStore()
const nanvigationStore = useNavigationStore()

const isLargeScreen = useMediaQuery('(min-width: 1024px)')
</script>

<style>
.layout {
  width: 100%;
  height: 100%;
  display: flex;
  gap: 4em;
  padding: 2rem;
}

.left {
  min-width: 20rem;
  max-width: 30rem;
  flex: 1 1 30%;
}

.main {
  flex: 1 1 70%;
  display: flex;
  flex-direction: column;
}

.search {
  margin-bottom: 2rem;
}

.securityDetails {
  flex: 1 1 50%;
}

.orderHistory {
  margin-top: 2rem;
  flex: 1 1 50%;
}
</style>
