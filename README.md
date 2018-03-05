# lowercase-keys-object
Lowercase the keys of an object. It is useful for oracledb.


## Installation

`$ npm install --save lowercase-keys-object`

or

`$ yarn add lowercase-keys-object`


## Usage

```js
const lowerKeys = require('lowercase-keys-object');

const employee = {
	ID: 127,
	FIRST_Name: 'Huynh',
	last_NAME: 'Ha',
	salary: 1500
};

const res = lowerKeys(employee);

console.log(res);

// { id: 127, first_name: 'Huynh', last_name: 'Ha', salary: 1500 }
```

## API

### lowerKeys(object)

Returns a new object which keys is/are lowercased.


## Related
[uppercase-keys-object](https://github.com/huynhsamha/uppercase-keys-object)
