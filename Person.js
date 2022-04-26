const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true,
        default: 18
    },
    favoriteFood: {
        type: [String],
        required: true,
        default: ['pizza']
    }
});

module.exports = mongoose.model("Person", userSchema);