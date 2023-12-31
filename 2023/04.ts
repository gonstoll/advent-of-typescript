type Address = {address: string; city: string}
type PresentDeliveryList<TList extends Record<any, any>> = {
  [TKey in keyof TList]: Address
}
