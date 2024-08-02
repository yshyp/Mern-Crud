const express = require('express');
const router = express.Router();
const {
  createItem,
  getAllItems,
  getItemById,
  updateItemById,
  deleteItemById,
} = require('../controllers/ItemController');

// Define CRUD routes
router.post('/', createItem);
router.get('/', getAllItems);
router.get('/:id', getItemById);
router.put('/:id', updateItemById);
router.delete('/:id', deleteItemById);

module.exports = router;
