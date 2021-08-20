const express = require("express");
const app = express();
const helmet = require("helmet");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const apiErrorHandler = require("./error/api-error-handler");
// const ApiError = require("./error/ApiError");

//middlewares
app.use(express.json());
app.use(helmet());
app.use(cors({ exposedHeaders: "x-auth-token" }));

//API limiter (limit 200 api hits in 15 minutes)
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 200,
});
app.use("/api/v1", apiLimiter);

app.get("/api/v1/check", (req, res, next) => {
  //This is how you can pass the error
  //   if (true) {
  //     next(ApiError.badRequest("checking the badrequest"));
  //     return;
  //   }
  res.status(200).send({ message: "Server is up" });
});

app.use(apiErrorHandler);

module.exports = app;
