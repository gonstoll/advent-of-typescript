type RemoveNaughtyChildren<TObj extends Record<string, any>> = {
  [TKey in keyof TObj as TKey extends `naughty_${string}`
    ? never
    : TKey]: TObj[TKey]
}
