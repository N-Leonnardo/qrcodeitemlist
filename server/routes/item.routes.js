
const ItemController = require('../controllers/item.controller');

module.exports = function(app){
    app.post('/api/item', ItemController.createItem);
    app.get('/api/item', ItemController.getAllItems);
    app.get('/api/item/:id', ItemController.getOne);
    app.get('/api/item/:barcode', ItemController.getOneBarcode);
    app.put('/api/item/:id', ItemController.updateItem)
    app.delete('/api/item/:id', ItemController.deleteItem)
    
}