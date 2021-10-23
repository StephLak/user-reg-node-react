module.exports = {
  successResponse: (res, statusCode, message, data) => {
    return res.status(statusCode).json({
      status: "success",
      message,
      data,
    });
  },

  sessionSuccessResponse: (res, statusCode, message, token, data) => {
    return res.status(statusCode).json({
      status: "success",
      message,
      token,
      data,
    });
  },

  errorResponse: (res, statusCode, message, err) => {
    return res.status(statusCode).json({
      status: "error",
      message,
      err,
    });
  },
};
