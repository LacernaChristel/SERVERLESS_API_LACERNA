const mongoose = require ('mongoose');
const authorSchema = require('../schema/author');

const AuthorModel =  mongoose.model('Inventory', inventorySchema);

module.exports = InventoryModel;
