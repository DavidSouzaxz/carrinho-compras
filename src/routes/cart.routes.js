const express = require('express');
const router = express.Router();
const controller = require('../controllers/cart.controller.js');

router.get('/', controller.getAll);
router.post('/', controller.add);
router.delete('/:id', controller.remove);
router.delete('/', controller.clear);
router.get('/total', controller.total);

module.exports = router;
