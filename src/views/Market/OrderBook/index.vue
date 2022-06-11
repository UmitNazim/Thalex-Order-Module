<template>
  <organism-card hover class="market__orderbook">
    <div class="place-items-start gap-2">
      <atom-icon icon="sell-buy" class="cursor-pointer" @on-click="displayItem('both')" />
      <atom-icon icon="only-buy" class="cursor-pointer" @on-click="displayItem('buy')" />
      <atom-icon icon="only-sell" class="cursor-pointer" @on-click="displayItem('sell')" />
    </div>
    <atom-divider class="my-8" />

    <div class="overflow-hidden">
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
            v-for="n in 15"
            :key="n"
            class="cursor-pointer b-watermelon-opacity"
            style="
              background: linear-gradient(to left, var(--watermelon-opacity) 75%, transparent 75%);
            "
          >
            <td class="p-4 font-small t-watermelon">3.300</td>
            <td class="p-4 font-small text-end t-french-grey">28.333</td>
            <td class="p-4 font-small text-end t-french-grey">4040.65</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div v-if="sell || both" class="mt-8 overflow-hidden">
      <table class="w-100" style="border-collapse: collapse">
        <thead>
          <tr>
            <td class="p-4 font-small t-oslo-grey">Price</td>
            <td class="p-4 text-end font-small t-oslo-grey">Amount</td>
            <td class="p-4 text-end font-small t-oslo-grey">Total</td>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="n in 15"
            :key="n"
            class="cursor-pointer"
            style="
              background: linear-gradient(to left, var(--vibrant-opacity) 75%, transparent 75%);
            "
          >
            <td class="p-4 font-small t-vibrant">3.300</td>
            <td class="p-4 font-small text-end t-french-grey">28.333</td>
            <td class="p-4 font-small text-end t-french-grey">4040.65</td>
          </tr>
        </tbody>
      </table>
    </div>
  </organism-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'OrderBook',
  data: () => ({ sell: false, buy: false, both: true }),

  methods: {
    displayItem(val = 'both'): void {
      ;['sell', 'both', 'buy'].forEach((element) => (this[element] = element === val))
    },
  },
})
</script>
