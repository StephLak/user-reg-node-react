const { validationResult } = require("express-validator");
const { errorResponse } = require("../response");

module.exports = {
  bodyValidator: (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return errorResponse(res, 422, "Validation Error", errors.array());
    }
    next();
  },
};
