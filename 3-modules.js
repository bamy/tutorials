// CommonJs, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const names = require('./4-names');
const sayHi = require('./5-utils');
const dataType = require('./6-alternative-flavour')
require('./7-mind-grenade');

sayHi(names.john);
sayHi(names.peter);
console.log(dataType);