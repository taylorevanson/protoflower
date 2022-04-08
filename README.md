# protoflower
useful String, Number, Object, and Array prototypes
in progress
here's what I have so far for usage:
```javascript
import { makeApi } from 'protoflower'

makeApi('swapi', {
	host: 'swapi.dev',
})

let res = await 'people/1'.api('swapi').get();
console.log(res)
```
that's the contents of `test.js` so just run `node test.js` or `npm test`