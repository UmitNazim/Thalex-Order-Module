import { MarketStateModel, OrderbookItemList, OrderbookItem } from '@/models'

export default {
  setOrderBookSell(state: MarketStateModel, items: OrderbookItemList): void {
    state.sellItems = items
  },

  setOrderBookBuy(state: MarketStateModel, items: OrderbookItemList): void {
    state.buyItems = items
  },

  createOrderBook(
    state: MarketStateModel,
    { side, item }: { side: string; item: OrderbookItem }
  ): void {
    state[side].push(item)
  },

  deleteOrderBook(state: MarketStateModel, { side, id }: { side: string; id: number }): void {
    state[side].splice(id, 1)
  },
}
