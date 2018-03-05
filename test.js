const lowerKeys = require('./index');

const employee = {
	ID: 127,
	FIRST_Name: 'Huynh',
	last_NAME: 'Ha',
	salary: 1500
};

const res = lowerKeys(employee);

console.log(res);
console.log(lowerKeys(null));
console.log(lowerKeys(undefined));
