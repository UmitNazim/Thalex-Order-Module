import { MarketStateModel, OrderbookItemList, OrderbookItem } from '@/models'

export default {
  setOrderBookSell(
    state: MarketStateModel,
    item: { sellList: OrderbookItemList; maxAmount: number }
  ): void {
    state.sellItems = item.sellList
    if (item.maxAmount > state?.maxSellAmount) state.maxSellAmount = item.maxAmount
  },

  setOrderBookBuy(
    state: MarketStateModel,
    item: { buyList: OrderbookItemList; maxAmount: number }
  ): void {
    state.buyItems = item.buyList
    if (item.maxAmount > state?.maxBuyAmount) state.maxBuyAmount = item.maxAmount
  },

  createOrderBook(
    state: MarketStateModel,
    { side, item }: { side: string; item: OrderbookItem }
  ): void {
    state[side].push(item)
    const target = side.includes('buy') ? 'maxBuyAmount' : 'maxSellAmount'
    const total = item.price * item.amount
    if (total > state[target]) state[target] = total
  },

  deleteOrderBook(state: MarketStateModel, { side, id }: { side: string; id: number }): void {
    state[side].splice(id, 1)
  },
}
