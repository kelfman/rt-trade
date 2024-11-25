import { defineStore } from 'pinia'

interface State {
  selectedTab: 'main' | 'watchList' | 'orderHistory'
}

export const useNavigationStore = defineStore('navigation', {
  state: (): State => ({
    selectedTab: 'main',
  }),
  actions: {
    selectTab(tabId: State['selectedTab']) {
      this.selectedTab = tabId
    },
  },
})
