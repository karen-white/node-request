#! /usr/bin/env node

const http = require("https");

const config = {
  "method": "GET",
  "hostname": "api.bigcommerce.com",
  "path": "/stores/ynqoux97dv/v3/catalog/products",
  "headers": {
    "x-auth-client": "",
    "x-auth-token": "",
    "accept": "application/json",
    "content-type": "application/json"
   }
};

const req = http.request(config, res => {

	let body = "";

  res.on('data', data => {
    body += data.toString();
  });

  res.on('end', () => {
    const products = JSON.parse(body);
    console.log(products);
  });
});

req.end();