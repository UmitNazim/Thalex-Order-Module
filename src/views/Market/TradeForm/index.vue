<template>
  <organism-card hover class="market__trade p-16">
    <div class="flex-column gap-16 w-100">
      <molecule-input :placeholder="$t('trade.price')" append="USD" v-model.number="buy.price" />
      <molecule-input :placeholder="$t('trade.amount')" append="BTC" v-model.number="buy.amount" />
      <molecule-input :placeholder="$t('trade.total')" append="USD" readonly v-model="buy.total" />
      <atom-button
        @on-click="createOrder('buy')"
        theme="success"
        size="md"
        block
        :disabled="!buy.total"
      >
        {{ $t('trade.buy') }}</atom-button
      >
    </div>

    <div class="flex-column gap-16 w-100">
      <molecule-input :placeholder="$t('trade.price')" append="USD" v-model.number="sell.price" />
      <molecule-input :placeholder="$t('trade.amount')" append="BTC" v-model.number="sell.amount" />
      <molecule-input :placeholder="$t('trade.total')" append="USD" readonly v-model="sell.total" />
      <atom-button
        @on-click="createOrder('sell')"
        theme="danger"
        size="md"
        block
        :disabled="!sell.total"
      >
        {{ $t('trade.sell') }}</atom-button
      >
    </div>
  </organism-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TradeForm',
  data: () => ({
    sell: { amount: null, price: null, total: null },
    buy: { amount: null, price: null, total: null },
  }),

  methods: {
    createOrder(val = 'buy') {
      this.$store.dispatch('createOrder', { side: `${val}Items`, item: this[val] })
      this[val] = { amount: null, price: null, total: null }
    },

    // Socket Simulation
    orderSocket() {
      setInterval(() => {
        const item = {
          amount: Math.floor(Math.random() * 100) + 1,
          price: Math.floor(Math.random() * 500) + 1,
        }
        const id = Math.floor(Math.random() * 20) + 1
        this.$store.dispatch('createOrder', { side: 'sellItems', item })
        this.$store.dispatch('createOrder', { side: 'buyItems', item })
        this.$store.dispatch('deleteOrder', { side: 'sellItems', id })
        this.$store.dispatch('deleteOrder', { side: 'buyItems', id })
      }, 1000)
    },
  },

  // Temporary validation
  watch: {
    sell: {
      handler({ amount, price }) {
        if (Number(amount) && Number(price)) this.sell.total = amount * price
      },
      deep: true,
    },

    buy: {
      handler({ amount, price }) {
        if (Number(amount) && Number(price)) this.buy.total = amount * price
      },
      deep: true,
    },
  },

  created() {
    this.orderSocket()
  },
})
</script>
