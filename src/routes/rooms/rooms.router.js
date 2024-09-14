const express = require("express");
const roomsRouter = express.Router();
//
const { getRooms, postRoom, getRoom } = require("./rooms.controller");
//

roomsRouter.post("/rooms", postRoom);
roomsRouter.get("/rooms", getRooms);
roomsRouter.get("/rooms/:id", getRoom);

module.exports = roomsRouter;
