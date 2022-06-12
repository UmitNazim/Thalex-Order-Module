<template>
  <organism-card hover class="market__trade p-16 gap-16 place-items-between">
    <div class="flex-column gap-16 w-100">
      <molecule-input :placeholder="$t('trade.price')" append="USD" v-model.number="buy.price" />
      <molecule-input :placeholder="$t('trade.amount')" append="BTC" v-model.number="buy.amount" />
      <molecule-input :placeholder="$t('trade.total')" append="USD" readonly v-model="buy.total" />
      <atom-button
        block
        size="md"
        theme="success"
        :disabled="!buy.total"
        @on-click="createOrder('buy')"
      >
        {{ $t('trade.buy') }}</atom-button
      >
    </div>

    <div class="flex-column gap-16 w-100">
      <molecule-input :placeholder="$t('trade.price')" append="USD" v-model.number="sell.price" />
      <molecule-input :placeholder="$t('trade.amount')" append="BTC" v-model.number="sell.amount" />
      <molecule-input :placeholder="$t('trade.total')" append="USD" readonly v-model="sell.total" />
      <atom-button
        block
        size="md"
        theme="danger"
        :disabled="!sell.total"
        @on-click="createOrder('sell')"
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
  props: { selected: { type: Object } },

  data: () => ({
    sell: { amount: null, price: null, total: null },
    buy: { amount: null, price: null, total: null },
  }),

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

    selected({ order: { amount, price }, side }) {
      this[side].price = price
      this[side].amount = amount
    },
  },

  methods: {
    createOrder(val = 'buy') {
      this.$store.dispatch('market/createOrder', { side: `${val}Items`, item: this[val] })
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
        this.$store.dispatch('market/createOrder', { side: 'sellItems', item })
        this.$store.dispatch('market/createOrder', { side: 'buyItems', item })
        this.$store.dispatch('market/deleteOrder', { side: 'sellItems', id })
        this.$store.dispatch('market/deleteOrder', { side: 'buyItems', id })
      }, 1000)
    },
  },

  created() {
    this.orderSocket()
  },
})
</script>
