type StreetSuffixTester<
  TStreet extends string,
  TSuffix extends string,
> = TStreet extends `${infer TFirstWord} ${infer TRest}`
  ? TFirstWord extends TSuffix
    ? true
    : TRest extends TSuffix
    ? true
    : StreetSuffixTester<TRest, TSuffix>
  : false
