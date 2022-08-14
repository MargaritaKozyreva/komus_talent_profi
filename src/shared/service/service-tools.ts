const dev = process.env['NODE_ENV'] === 'development';

const _url = (action: any, query: any = '') => {
	if (dev) {
		return `http://172.16.3.123:81/komus_talants_profi_api/controller.html?action=${ action }${
			query && '&' + query
		}`;
	}
	return `/komus_talants_profi_api/controller.html?action=${ action }${
		query && '&' + query
	}`;
};

export { _url };
