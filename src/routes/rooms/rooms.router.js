const express = require("express");
const roomsRouter = express.Router();
//
const { getRooms, postRoom } = require("./rooms.controller");
//

roomsRouter.post("/rooms", postRoom);
roomsRouter.get("/rooms", getRooms);

module.exports = roomsRouter;
