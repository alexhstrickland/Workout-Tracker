const express = require('express')
const router = express.Router();
const db = require('../models');

router.get('/api/workouts', (req, res) => {
    db.Workout.find().then(function(results){
        res.json(results);
        console.log(res.json);
    })
});

router.post('/api/workouts', (req, res) => {
    db.Workout.create(req.body).then(function(results){
        res.json(results);
        console.log(res.json);
    })
});

router.put('/api/workouts/:id', (req, res) => {
    db.Workout.updateOne(
        { _id: req.params.id },
        { $push: { exercises: req.body } }
    ).then(function(results){
        res.json(results);
        console.log(res.json);
    })
});

router.get('/api/workouts/range', (req, res) => {
    db.Workout.find().then(function(results){
        res.json(results);
        console.log(res.json);
    })
});

module.exports = router;