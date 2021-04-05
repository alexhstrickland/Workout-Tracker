const express = require('express');
const mongojs = require('mongojs');
const logger = require('morgan');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 4050;

const app = express();
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static{'public'});
app.use(require('./routes/htmlRoutes'));
app.use(require('./routes/apiRoutes'));
