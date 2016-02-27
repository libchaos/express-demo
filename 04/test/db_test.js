// db_test.js

'use strict';
let db = require('../db');
db.add({
  name: 'libchaos'
});

console.log(db.list);
