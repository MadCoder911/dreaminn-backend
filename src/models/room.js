const mongoose = require("mongoose");
const { Schema } = mongoose;
const RoomSchema = new mongoose.Schema({
  room_name: {
    type: String,
    required: true,
  },
  number_of_rooms: {
    type: Number,
    required: true,
  },
  room_price: {
    type: Number,
    required: true,
  },
  capacity: {
    type: String,
    required: true,
  },
  bed_options: {
    type: String,
    required: true,
  },
  pictures: {
    type: Array,
    required: true,
  },
});
module.exports = mongoose.model("Room", RoomSchema);
