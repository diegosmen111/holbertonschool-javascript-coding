#!/usr/bin/node
const request = require('request');
const fargs = process.argv;
request(fargs[2], function (error, response, body) {
  if (error) {
    console.log(error);
  }
  let count = 0;
  const js = JSON.parse(body).results;
  for (let i = 0; i < js.length; i++) {
    const character = js[i].characters.find((js) => {
      return (js.match(/18/));
    });
    if (character !== undefined) {
      count++;
    }
  }
  console.log(count);
});
