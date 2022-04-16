const req = require('express/lib/request');
const {Item}  = require ('../models/item.model');
//C
module.exports.createItem = (request, response) =>{
    const { name, type , desc, barcode, img } = request.body;
    Item.create({
        name,
        type,
        desc,
        barcode,
        img
    })
    .then(person=>response.json(person))
    .catch(err=>response.status(400).json(err))
}
//R
module.exports.getAllItems = (request, response) =>{
    Item.find().sort({type:1, name: 1})
    .then(product=>response.json(product))
    .catch(err=>response.status(400).json(err))
}

module.exports.getOne = (req, res) =>{
    Item.findOne({_id: req.params.id})
    .then(product=>res.json(product))
    .catch(err=>res.json(err))
}

//U

module.exports.updateItem = (request, response) =>{
    Item.findOneAndUpdate(
        {_id: request.params.id},
        request.body,
        {new: true, runValidators: true}
    )
    .then(product=>response.json(product))
    .catch(err=>response.status(400).json(err))
}

//D

module.exports.deleteItem = (req, res) =>{
    Item.deleteOne({_id: req.params.id})
    .then(deleteConf => res.json(deleteConf))
    .catch(err=>res.json(err))
}