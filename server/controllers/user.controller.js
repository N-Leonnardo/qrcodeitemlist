const req = require('express/lib/request');
const {User}  = require ('../models/user.model');

//C
module.exports.createUser = (request, response) =>{
    const { username, password } = request.body;
    User.create({
        username,
        password
    })
    .then(person=>response.json(person))
    .catch(err=>response.status(400).json(err))
}
//R
module.exports.getAllUsers = (request, response) =>{
    User.find().sort({type:1, name: 1})
    .then(product=>response.json(product))
    .catch(err=>response.status(400).json(err))
}

module.exports.getOne = (req, res) =>{
    User.findOne({_id: req.params.id})
    .then(product=>res.json(product))
    .catch(err=>res.json(err))
}

//U

module.exports.updateUser = (request, response) =>{
    User.findOneAndUpdate(
        {_id: request.params.id},
        request.body,
        {new: true, runValidators: true}
    )
    .then(product=>response.json(product))
    .catch(err=>response.status(400).json(err))
}

//D

module.exports.deleteUser = (req, res) =>{
    User.deleteOne({_id: req.params.id})
    .then(deleteConf => res.json(deleteConf))
    .catch(err=>res.json(err))
}