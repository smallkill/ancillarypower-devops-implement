const express = require('express');
const healthRouter = require('./routes/health');
const exampleRouter = require('./routes/example');

const app = express();
app.use(express.json());

app.use('/health', healthRouter);
app.use('/api', exampleRouter);

module.exports = app;
