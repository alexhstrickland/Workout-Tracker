const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
// const mongojs = require('mongojs');

const PORT = process.env.PORT || 4050;

const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(require('./routes/htmlRoutes'));
app.use(require('./routes/apiRoutes'));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workout', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
});