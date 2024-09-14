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
    const rooms = await RoomSchema.find();
    res.status(200).send(rooms);
  } catch (err) {
    next(err);
  }
};
module.exports = { postRoom, getRooms };
