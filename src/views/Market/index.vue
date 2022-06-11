<template>
  <main class="b-mirage market">
    <market-ticker />
    <div class="market-wrapper">
      <order-book />
      <orders-chart />
      <trade-form />
      <user-orders />
      <market-picker />
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import MarketTicker from './MarketTicker/index.vue'
import MarketPicker from './MarketPicker/index.vue'
import TradeForm from './TradeForm/index.vue'
import OrdersChart from './OrdersChart/index.vue'
import OrderBook from './OrderBook/index.vue'
import UserOrders from './UserOrders/index.vue'

export default defineComponent({
  name: 'Market',
  components: {
    MarketTicker,
    MarketPicker,
    TradeForm,
    OrdersChart,
    OrderBook,
    UserOrders,
  },
})
</script>
