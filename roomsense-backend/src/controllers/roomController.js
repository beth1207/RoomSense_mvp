const Room = require('../models/room');

exports.createRoom = async (req, res) => {
  const { name, capacity, amenities } = req.body;

  try {
    const newRoom = new Room({
      name,
      capacity,
      amenities
    });

    const room = await newRoom.save();

    res.json(room);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getRooms = async (req, res) => {
  try {
    const rooms = await Room.find();
    res.json(rooms);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
