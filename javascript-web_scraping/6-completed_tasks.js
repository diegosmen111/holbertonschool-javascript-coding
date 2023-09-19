#!/usr/bin/node
const request = require('request');
const args = process.argv;

const url = args[2];
request(url, function (error, response, body) {
  if (error) {
    console.log(error);
  } else {
    const dict = JSON.parse(body);
    const findtrue = dict.filter(function (diction) {
      return diction.completed === true;
    });
    const users = [];
    for (const key in findtrue) {
      users.push(findtrue[key].userId);
    }
    const result = { };
    for (let i = 0; i < users.length; ++i) {
      if (!result[users[i]]) { result[users[i]] = 0; }
      ++result[users[i]];
    }
    console.log(result);
  }
});
