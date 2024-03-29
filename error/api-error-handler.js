const ApiError = require("./ApiError");

function apiErrorHandler(err, req, res, next) {
  // in prod, don't use console.log or console.err because
  // it is not async
  console.error(err);

  if (err instanceof ApiError) {
    res.status(err.code).json(err.message);
    return;
  }

  res.status(err.code).json({
    code: err.code,
    message: err.message,
  });
}

module.exports = apiErrorHandler;
