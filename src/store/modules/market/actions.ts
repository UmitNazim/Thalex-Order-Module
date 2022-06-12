import { Commit } from 'vuex'
import { OrderbookItem, OrderbookItemList } from '@/models'

export default {
  orderBookSellList(
    { commit }: { commit: Commit },
    orderBookSell: { sellList: OrderbookItemList; maxAmount: number }
  ): void {
    commit('setOrderBookSell', orderBookSell)
  },

  orderBookBuyList(
    { commit }: { commit: Commit },
    orderBookBuy: { buyList: OrderbookItemList; maxAmount: number }
  ): void {
    commit('setOrderBookBuy', orderBookBuy)
  },

  createOrder({ commit }: { commit: Commit }, order: { side: string; item: OrderbookItem }): void {
    commit('createOrderBook', order)
  },

  deleteOrder({ commit }: { commit: Commit }, order: { side: string; id: number }): void {
    commit('deleteOrderBook', order)
  },
}
