module.exports = (app) => {
    const teams = require('../controllers/team.controller.js');

    // Create a new Team
    app.post('/api/teams', teams.create);

    // Retrieve all Teams
    app.get('/api/teams', teams.findAll);

    // Retrieve a single Team with teamId
    app.get('/api/teams/:teamId', teams.findOne);

    // Update a Team with teamId
    app.put('/api/teams/:teamId', teams.update);

    // Delete a Team with teamId
    app.delete('/api/teams/:teamId', teams.delete);
}