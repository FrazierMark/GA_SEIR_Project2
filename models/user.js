const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const noteSchema = new mongoose.Schema({
    text: String,
    user_id: [{type: Schema.Types.ObjectId, ref: 'User'}],
}, {
    timestamps: true
});

module.exports = mongoose.model('Note', noteSchema);


const userSchema = new mongoose.Schema({
    name: String,
    googleId: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        max: 50,
        unique: true
      },
    avatar: String
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);