import { MarketStateModel } from '@/models'

export default (): MarketStateModel => ({
  sellItems: [],
  buyItems: [],
  maxBuyAmount: null,
  maxSellAmount: null,
})
