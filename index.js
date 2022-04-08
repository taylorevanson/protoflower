import 'isomorphic-fetch'
global.apis = {}

function generateApi(name, options) {
	let defaults = {
		port: 80,
		host: '/',
		protocol: 'http',
		endpoint: 'api'
	}
	
	options = Object.assign(defaults, options, {})
	return async function(endpoint, method, data) {
		options.method = method
		switch(method) {
			case 'POST':
				options.body = JSON.stringify(data)
				options.headers = {
			      'Accept': 'application/json',
			      'Content-Type': 'application/json'
			    }
				break;
			case 'GET':
				if(typeof data !== 'undefined') endpoint = endpoint + '/' + data
				break;
		}

		return await fetch(`${options.protocol}://${options.host}/${options.endpoint}/${endpoint}`, options).then(response => response.json())
	}
}

function api(api) {
	var self = this;
	return {
		get: async function(slug) {
			return await global.apis[api](self, 'GET', slug)
		},
		post: async function(body) {
			return await global.apis[api](self, 'POST', body)
		}
	}
}

String.prototype.api = api
export function makeApi(name, options) {
	global.apis[name] = generateApi(name, options)
}

