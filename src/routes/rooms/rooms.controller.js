const RoomSchema = require("../../models/room");
const createError = require("../../utils/error");
//
const postRoom = async (req, res, next) => {
  console.log(req.body);
  try {
    const newRoom = new RoomSchema(req.body);
    await newRoom.save();
    res.status(200).send("Room has been created");
  } catch (err) {
    next(err);
  }
};
//
const getRooms = async (req, res, next) => {
  try {
    if (req.url.length > 9) {
      let roomId = req.url.slice(10);
      const room = await RoomSchema.findById(roomId);
      res.status(200).send(room);
    } else {
      const rooms = await RoomSchema.find();
      res.status(200).send(rooms);
    }
  } catch (err) {
    next(err);
  }
};
const getRoom = async (req, res, next) => {
  console.log("x");
  try {
    const rooms = await RoomSchema.find();
    res.status(200).send(rooms);
  } catch (err) {
    next(err);
  }
};
module.exports = { postRoom, getRooms, getRoom };
