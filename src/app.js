const express = require("express");
const cors = require("cors");

//Routes
const roomsRouter = require("./routes/rooms/rooms.router");

//
const app = express();
app.use(
  cors(
    {
      credentials: true, //i
    },
    { "Access-Control-Allow-Origin": "*" }
  )
);

app.use(express.json());
app.use(roomsRouter);

//
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong !";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
  });
});

module.exports = app;
