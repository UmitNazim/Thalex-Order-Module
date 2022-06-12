type OrderbookItem = {
  id?: number
  price: number
  amount: number
}
type OrderbookItemList = Array<OrderbookItem>

type MarketStateModel = {
  buyItems: OrderbookItemList
  sellItems: OrderbookItemList
  maxBuyAmount?: number | any
  maxSellAmount?: number | any
  [prop: string]: any
}

export { OrderbookItem, OrderbookItemList, MarketStateModel }
