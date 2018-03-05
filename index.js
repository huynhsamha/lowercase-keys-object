'use strict';

const lowercaseKeys = (obj) => {
	const res = {};
	for (let key in obj) {
		res[String(key).toLowerCase()] = obj[key];
	}
	return res;
}

module.exports = lowercaseKeys;
