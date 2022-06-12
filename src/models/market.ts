type OrderbookItem = {
  id?: number
  price: number
  amount: number
}
type OrderbookItemList = Array<OrderbookItem>

type MarketStateModel = {
  buyItems: OrderbookItemList
  sellItems: OrderbookItemList
  [prop: string]: any
}

export { OrderbookItem, OrderbookItemList, MarketStateModel }
