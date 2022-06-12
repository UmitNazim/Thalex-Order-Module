import { MarketStateModel, OrderbookItemList } from '@/models'

export default {
  getSellItems: (state: MarketStateModel): OrderbookItemList => state.sellItems,
  getBuyItems: (state: MarketStateModel): OrderbookItemList => state.buyItems,
  getMaxSell: (state: MarketStateModel): number => state.maxSellAmount,
  getMaxBuy: (state: MarketStateModel): number => state.maxBuyAmount,
}
