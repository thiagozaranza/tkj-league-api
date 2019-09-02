const mongoose = require('mongoose');

const TeamSchema = mongoose.Schema({
    name: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Team', TeamSchema);