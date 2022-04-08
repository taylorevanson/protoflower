import { makeApi } from './index.js'

makeApi('swapi', {
	host: 'swapi.dev',
})

let res = await 'people/1'.api('swapi').get();
console.log(res)