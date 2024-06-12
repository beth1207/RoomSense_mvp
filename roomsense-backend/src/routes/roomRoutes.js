const express = require('express');
const router = express.Router();
const { createRoom, getRooms } = require('../controllers/roomController');
const auth = require('../middleware/authMiddleware');

router.post('/rooms', auth, createRoom);
router.get('/rooms', auth, getRooms);

module.exports = router;
