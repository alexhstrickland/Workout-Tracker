const express = require('express')
const router = express.Router();
const db = require('../models');

router.get('/api/workouts', (req, res) => {
    db.Workout.find().then(function(results){
        res.json(results);
    })
});

router.post('/api/workouts', (req, res) => {
    db.Workout.find().then(function(results){
        res.json(results);
    })
});

router.put('/api/workouts', (req, res) => {
    db.Workout.find().then(function(results){
        res.json(results);
    })
});

router.get('/api/workouts', (req, res) => {
    db.Workout.find().then(function(results){
        res.json(results);
    })
});

module.exports = router;