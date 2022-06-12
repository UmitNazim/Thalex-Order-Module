<template>
  <organism-card hover class="market__orderbook p-12 overflow-auto">
    <div class="place-items-start gap-2">
      <atom-icon icon="sell-buy" class="cursor-pointer" @on-click="displayBy('both')" />
      <atom-icon icon="only-buy" class="cursor-pointer" @on-click="displayBy('buy')" />
      <atom-icon icon="only-sell" class="cursor-pointer" @on-click="displayBy('sell')" />
    </div>
    <atom-divider class="my-8" />

    <table v-if="buy || both" class="w-100 border-collapse">
      <thead>
        <tr>
          <td class="p-4 font-small t-oslo-grey">Price - (Desc)</td>
          <td class="p-4 text-end font-small t-oslo-grey">Amount</td>
          <td class="p-4 text-end font-small t-oslo-grey">Total</td>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="{
            price,
            amount,
            total = amount * price,
            volume = ((total * 100) / maxBuy).toFixed(),
          } in orderBookBuy"
          :key="`sell-${total}`"
          class="cursor-pointer slide-in-effect position-relative"
          @click="$emit('on-click', { side: 'buy', order: orderBookBuy[0] })"
        >
          <td class="p-4 font-small t-vibrant">{{ price }}</td>
          <td class="p-4 font-small text-end t-french-grey">{{ amount }}</td>
          <td class="p-4 font-small text-end t-french-grey">{{ total }}</td>
          <td
            colspan="3"
            :style="`position: absolute; left:auto; 
            right:0; height: 24px; width: ${volume}%; 
            background-color:var(--vibrant-opacity)`"
          ></td>
        </tr>
      </tbody>
    </table>

    <atom-divider v-if="both" class="mt-16 mb-4" />

    <table v-if="sell || both" class="w-100 mt-8" style="border-collapse: collapse">
      <thead>
        <tr>
          <td class="p-4 font-small t-oslo-grey">Price - (Asc)</td>
          <td class="p-4 text-end font-small t-oslo-grey">Amount</td>
          <td class="p-4 text-end font-small t-oslo-grey">Total</td>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="{
            price,
            amount,
            total = amount * price,
            volume = ((total * 100) / maxSell).toFixed(),
          } in orderBookSell"
          :key="`buy-${total}`"
          class="cursor-pointer slide-in-effect position-relative"
          @click="$emit('on-click', { side: 'sell', order: orderBookSell[0] })"
        >
          <td class="p-4 font-small t-watermelon">{{ price }}</td>
          <td class="p-4 font-small text-end t-french-grey">{{ amount }}</td>
          <td class="p-4 font-small text-end t-french-grey">{{ total }}</td>
          <td
            colspan="3"
            :style="`position: absolute; left:auto; 
            right:0; height: 24px; width: ${volume}%;
            background-color:var(--watermelon-opacity)`"
          ></td>
        </tr>
      </tbody>
    </table>
  </organism-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import sortBy from 'lodash/sortBy'

export default defineComponent({
  name: 'OrderBook',
  data: () => ({ sell: false, buy: false, both: true }),

  computed: {
    orderBookBuy() {
      return sortBy(this.$store.getters['market/getBuyItems'], ['price']).reverse()
    },

    orderBookSell() {
      return sortBy(this.$store.getters['market/getSellItems'], ['price'])
    },

    maxSell() {
      return this.$store.getters['market/getMaxSell']
    },

    maxBuy() {
      return this.$store.getters['market/getMaxBuy']
    },
  },

  methods: {
    displayBy(val = 'both'): void {
      ;['sell', 'both', 'buy'].forEach((element) => (this[element] = element === val))
    },
  },

  async created() {
    const [{ data: buyList }, { data: sellList }] = await Promise.all([
      await this.$http('/buy'),
      await this.$http('/sell'),
    ])

    this.$store.dispatch('market/orderBookSellList', {
      sellList,
      maxAmount: Math.max(
        ...sellList.map(({ amount, price }: { amount: number; price: number }) => amount * price)
      ),
    })

    this.$store.dispatch('market/orderBookBuyList', {
      buyList,
      maxAmount: Math.max(
        ...buyList.map(({ amount, price }: { amount: number; price: number }) => amount * price)
      ),
    })
  },
})
</script>
