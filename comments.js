// Create web server
const express = require('express');
const app = express();
const port = 3000;
// Create database
const comments = [
  { username: 'Alice', comment: 'I love your site!' },
  { username: 'Bob', comment: 'Good site!' },
];