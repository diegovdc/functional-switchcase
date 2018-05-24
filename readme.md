# functional-switchcase

All credit goes to Joel Thoms for this article: https://hackernoon.com/rethinking-javascript-eliminate-the-switch-statement-for-better-code-5c81c044716d


## Installation
`npm i functional-switchcase`

## Usage

```js
// type Cases = { Key: () -> a }
// type Default = () -> a
// type Key = String
// switchcaseF :: Cases -> Default -> Key -> a
const { switchcaseF } = require('functional-switchcase')
const counter = (state = 0, action) =>
  switchcaseF({
    'INCREMENT': () => state + 1,
    'DECREMENT': () => state -1
  })(() => state)(action.type)
```
For more details see https://hackernoon.com/rethinking-javascript-eliminate-the-switch-statement-for-better-code-5c81c044716d

