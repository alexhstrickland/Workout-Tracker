const express = require('express')
const router = express.Router();
// const mongojs = require('mongojs');
const db = require('../models');


    router.get('/api/workouts', async (req, res) => {
        const data = await db.Workout.find();
            res.json(data);
    });

    router.get('/api/workout/:id', (req, res) => {
        db.Workout.findOne(
            {
                _id: mongojs.ObjectID(req.params.id)
            },
            (err, data) => {
                if (err) {
                    res.send(err)
                } else {
                    res.send(data)
                }
            }
        )
    });

    router.post('/api/workouts', async (req, res) => {
        const data = await db.Workout.create(req.body);
        res.json(data);
    });

    router.put('/api/workouts/:id', async (req, res) => {
       const data = await db.Workout.updateOne(
           { _id: req.params.id },
           { $push: {exercises: req.body } }
       );
       res.json(data);
    });

    router.get('/api/workouts/range',  async (req, res) => {
        const data = await db.Workout.find();
        res.json(data);
    });

module.exports = router;