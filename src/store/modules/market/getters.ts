import { MarketStateModel, OrderbookItemList } from '@/models'

export default {
  getSellItems: (state: MarketStateModel): OrderbookItemList => state.sellItems,
  getBuyItems: (state: MarketStateModel): OrderbookItemList => state.buyItems,

  getMaxSell: (state: MarketStateModel): number =>
    Math.max(...state.sellItems.map((item) => item?.amount * item?.price)),

  getMaxBuy: (state: MarketStateModel): number =>
    Math.max(...state.buyItems.map((item) => item?.amount * item?.price)),
}
