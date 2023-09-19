#!/usr/bin/node
const fs = require('fs');
const args = process.argv;
/***
 * implementation of readFile
 */
fs.readFile(args[2], 'utf8', function (err, data) {
  if (err) return console.error(err);
  console.log(data.toString());
});
