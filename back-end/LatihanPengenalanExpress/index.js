const express = require('express');
const app = express();
const port = 3000;

// middleware global untuk parsing json
app.use(express.json());