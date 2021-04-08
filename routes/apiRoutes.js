const express = require('express')
const router = express.Router();
const mongojs = require('mongojs');
const db = require('../models');

router.get('/api/workouts', (req, res) => {
    db.Workout.find({}, (error, data) => {
        if (error) {
            res.send(error);
        } else {
            res.json(data);
        }
    });
});

router.post('/api/workouts', (req, res) => {
    const work = db.Workout.create({}, (error, data) => {
        if (error) {
            res.send(error)
        } else {
            res.json(data)
        }
    });
});

router.put('/api/workouts/:id', (req, res) => {
    db.Workout.findByIdAndUpdate(
        req.params.id,
        { $push: { exercises: req.body } },
        {new: true, runValidators: true }
    ).then(data => res.json(data))
        .catch(err => {
            res.json(err)
            console.log(res.json);
    })
});

router.get('/api/workouts/range', (req, res) => {
    db.Workout.find({}, (error, data) => {
        if (error) {
            res.send(error);
        } else {
            res.json(data);
        }
    });
});

module.exports = router;