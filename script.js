const mongoose = require('mongoose');
const { findByIdAndUpdate, deleteOne } = require('./Person');
require("dotenv").config();
const User = require('./Person');

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true } ).then(() => {
    console.log("connnected to the db with success");
});
  

async function createUser(name, age, favoriteFood) {
    try {
        const user = await User.create({ name, age, favoriteFood });
        console.log(user);
    } catch (error) {
        console.log(error);
    }
}

async function deleteUser(personId) {
    try {
        const user = await User.findByIdAndDelete(personId);
        console.log(user);
    } catch (error) {
        console.log(error);
    }
}

/*-------------------------- 1-Create and Save a Record of a Model: *-----------------------/
/* 
const Schema = new mongoose.Schema({
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

const Person = mongoose.model('Person', Schema);



const personone = new Person({
    name: 'John',
    age: 30,
    favoriteFood: ['pizza', 'chocolate']
});

personone.save().then(() => {
    console.log('Person saved with success');
});
 */


/*-------------------------- 2-Create Many Records with model.create() *-----------------------/
/* createUser('John', 20, ['pizza', 'pasta']);
createUser('Mary', 18, ['pizza', 'chocolate']);
createUser('Paul', 22, ['Bourek', 'chocolate']);
createUser('Faycal', 26, ['pizza', 'chocolate']);
createUser('Sophie', 24);
createUser('Lily'); */


/*-------------------------- 3-Use model.find() to Search Your Database *-----------------------/
/* User.find({ name : "Faycal"}).then(users => {
    console.log(users);
}); */


/*-------------------------- 4-Use model.findOne() to Return a Single Matching Document from Your Database *-----------------------/
/* User.findOne({ favoriteFood: 'pasta' }).then(user => {
    console.log(user);
}); */


/*-------------------------- 5-Use model.findById() to Search Your Database By _id *-----------------------/
/* User.findById('626760c43bf1f1aa2196e0ec').then(user => {
    console.log(user);
}); */


/*-------------------------- 6-Perform Classic Updates by Running Find, Edit, then Save *-----------------------/
/* User.findById('626760c43bf1f1aa2196e0ec').then(user => {
    user.favoriteFood.push('salad');
    user.save().then(() => {
        console.log('User updated with success');
    });
});
 */


/*-------------------------- 7-Perform New Updates on a Document Using model.findOneAndUpdate() *-----------------------/
/* User.findByIdAndUpdate('626760c43bf1f1aa2196e0ec', { age: 20 }, {new:true}).then(user => {
    console.log(user);
}); */


/*-------------------------- 8-Delete One Document Using model.findByIdAndRemove *-----------------------/
/* deleteUser('62675c9363eb82aa6d0425de'); */


/*-------------------------- 9-MongoDB and Mongoose - Delete Many Documents with model.remove() *-----------------------/
/* User.deleteMany({ name: 'Mary' }).then(done => {
    console.log(done);
}); */


/*-------------------------- 10-Chain Search Query Helpers to Narrow Search Results *-----------------------/
/* User.find({ favoriteFood: 'pizza' }).sort({ name: 1 }).limit(2).select('age').exec((err, done) => {
    if (err) {
        console.log(err);
    } else {
        console.log(done);
    }
}); */