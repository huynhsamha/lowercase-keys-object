# lowercase-keys
Lowercase the keys of an object. It is useful for oracledb.

## Installation

`$ npm install --save lowercase-keys`


## Usage

```js
const lowercaseKeys = require('./index');

const employee = {
	ID: 127,
	FIRST_Name: 'Huynh',
	last_NAME: 'Ha',
	salary: 1500
};

const res = lowercaseKeys(employee);

console.log(res);
```

## API

### lowercaseKeys(object)

Returns a new object which keys is/are lowercased.
