const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({

    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            type: {
                type: String
            },
        
            name: {
                type: String
            },
        
            distance: {
                type: Number
            },
        
            weight: {
                type: Number
            },
        
            sets: {
                type: Number
            },

            reps: {
                type: Number
            },

            duration: {
                type: Number
            }
        }
    ]
});

const Workout = mongoose.modell("Workout", WorkoutSchema);

module.exports = Workout;