type Prettify<TObj extends Record<string, unknown>> = {
  [TKey in keyof TObj]: TObj[TKey]
} & {}

type SantaListProtector<TObj extends Record<any, any>> = {
  readonly [TKey in keyof TObj]: TObj[TKey] extends
    | string
    | number
    | boolean
    | symbol
    | Function
    ? TObj[TKey]
    : Prettify<SantaListProtector<TObj[TKey]>>
}
