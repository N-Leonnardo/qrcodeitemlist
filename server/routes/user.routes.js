
const UserController = require('../controllers/user.controller');

module.exports = function(app){
    app.post('/api/user', UserController.createUser);
    app.get('/api/user', UserController.getAllUsers);
    app.get('/api/user/:id', UserController.getOne);
    app.put('/api/user/:id', UserController.updateUser)
    app.delete('/api/user/:id', UserController.deleteUser)
    
}