import { Commit } from 'vuex'
import { OrderbookItem } from '@/models'

export default {
  orderBookSellList({ commit }: { commit: Commit }, orderBookSell: OrderbookItem): void {
    commit('setOrderBookSell', orderBookSell)
  },

  orderBookBuyList({ commit }: { commit: Commit }, orderBookBuy: OrderbookItem): void {
    commit('setOrderBookBuy', orderBookBuy)
  },

  createOrder({ commit }: { commit: Commit }, order: { side: string; item: OrderbookItem }): void {
    commit('createOrderBook', order)
  },

  deleteOrder({ commit }: { commit: Commit }, order: { side: string; id: number }): void {
    commit('deleteOrderBook', order)
  },
}
