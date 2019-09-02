const Team = require('../models/team.model.js');

// Create and Save a new Team
exports.create = (req, res) => {

    // Validate request
    if(!req.body.name) {
        return res.status(400).send({
            message: "Team content can not be empty"
        });
    }

    // Create a Team
    const team = new Team({
        name: req.body.name || "Untitled Team"
    });

    // Save Team in the database
    team.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Team."
        });
    });
};

// Retrieve and return all Teams from the database.
exports.findAll = (req, res) => {
    Team.find()
    .then(teams => {
        res.send({
            list: teams
        });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving teams."
        });
    });
};

// Find a single Team with a teamId
exports.findOne = (req, res) => {
    Team.findById(req.params.teamId)
    .then(team => {
        if(!team) {
            return res.status(404).send({
                message: "Team not found with id " + req.params.teamId
            });            
        }
        res.send(team);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Team not found with id " + req.params.teamId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving team with id " + req.params.teamId
        });
    });
};

// Update a Team identified by the teamId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.name) {
        return res.status(400).send({
            message: "Team content can not be empty"
        });
    }

    // Find team and update it with the request body
    Team.findByIdAndUpdate(req.params.teamId, {
        name: req.body.name || "Untitled Team"
    }, {new: true})
    .then(team => {
        if(!team) {
            return res.status(404).send({
                message: "Team not found with id " + req.params.teamId
            });
        }
        res.send(team);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Team not found with id " + req.params.teamId
            });                
        }
        return res.status(500).send({
            message: "Error updating team with id " + req.params.teamId
        });
    });
};

// Delete a Team with the specified teamId in the request
exports.delete = (req, res) => {
    Team.findByIdAndRemove(req.params.teamId)
    .then(team => {
        if(!team) {
            return res.status(404).send({
                message: "Team not found with id " + req.params.teamId
            });
        }
        res.send({message: "Team deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Team not found with id " + req.params.teamId
            });                
        }
        return res.status(500).send({
            message: "Could not delete team with id " + req.params.teamId
        });
    });
};