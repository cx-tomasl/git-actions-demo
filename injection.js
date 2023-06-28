const mysql = require('mysql');
const express = require('express');
const session = require('express-session');
const path = require('path');
const prompt = require('prompt-sync')();
const CryptoJS = require("crypto-js");

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'test'
});

const app = express();

const username = prompt('Input username: ');
const password = prompt('Input password: ');
var hash = CryptoJS.MD5(password);

function checkLogin(un, pw) {
  const sqlQuery =
    "SELECT user FROM credentials WHERE " +
    "username='" + un + "' AND " +
    "password='" + hash + "'";
  console.log("query :" + sqlQuery)
  connection.query(sqlQuery, (err, result) => {
    /*if (err) {
      return false;
    }

    return result.length !== 0;*/
  });
}

checkLogin(username, password)