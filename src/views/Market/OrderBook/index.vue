<template>
  <organism-card hover class="market__orderbook p-12">
    <div class="place-items-start gap-2">
      <atom-icon icon="sell-buy" class="cursor-pointer" @on-click="displayBy('both')" />
      <atom-icon icon="only-buy" class="cursor-pointer" @on-click="displayBy('buy')" />
      <atom-icon icon="only-sell" class="cursor-pointer" @on-click="displayBy('sell')" />
    </div>
    <atom-divider class="my-8" />

    <table v-if="buy || both" class="w-100" style="border-collapse: collapse">
      <thead>
        <tr>
          <td class="p-4 font-small t-oslo-grey">Price</td>
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
          class="cursor-pointer slide-in-effect"
          :style="`background: linear-gradient(to left, var(--vibrant-opacity) ${volume}%, transparent ${
            100 - volume
          }%)`"
        >
          <td class="p-4 font-small t-vibrant">{{ price }}</td>
          <td class="p-4 font-small text-end t-french-grey">{{ amount }}</td>
          <td class="p-4 font-small text-end t-french-grey">
            {{ total }}
          </td>
        </tr>
      </tbody>
    </table>

    <atom-divider v-if="both" class="mt-16 mb-4" />

    <table v-if="sell || both" class="w-100 mt-8" style="border-collapse: collapse">
      <thead>
        <tr>
          <td class="p-4 font-small t-oslo-grey">Price</td>
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
          class="cursor-pointer slide-in-effect"
          :style="`background: linear-gradient(to left, var(--watermelon-opacity) ${volume}%, transparent ${
            100 - volume
          }%)`"
        >
          <td class="p-4 font-small t-watermelon">{{ price }}</td>
          <td class="p-4 font-small text-end t-french-grey">{{ amount }}</td>
          <td class="p-4 font-small text-end t-french-grey">{{ total }}</td>
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
      return sortBy(this.$store.getters.getBuyItems, ['price']).reverse()
    },

    orderBookSell() {
      return sortBy(this.$store.getters.getSellItems, ['price'])
    },

    maxSell() {
      return this.$store.getters.getMaxSell
    },

    maxBuy() {
      return this.$store.getters.getMaxBuy
    },
  },

  methods: {
    displayBy(val = 'both'): void {
      ;['sell', 'both', 'buy'].forEach((element) => (this[element] = element === val))
    },
  },

  async created() {
    const [{ data: buy }, { data: sell }] = await Promise.all([
      await this.$http('/buy'),
      await this.$http('/sell'),
    ])

    this.$store.dispatch('orderBookSellList', sell)
    this.$store.dispatch('orderBookBuyList', buy)
  },
})
</script>
