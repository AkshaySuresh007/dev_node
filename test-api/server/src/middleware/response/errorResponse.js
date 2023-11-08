/**
 * @author Akshay Suresh 08-11-2023
 * @description Function to send a error response message in the customized format
 * @param {string} message - A message describing the success (default: "Success").
 * @param {number} status - The HTTP response status code (default: 200).
 * @returns {void}
 */
function error(message = "Success", status = 200) {
    const resObj = {
        success: false,
        message,
        data: null,
    }

    this.status(status).json(resObj);
}

/**
 * @author Akshay Suresh 08-11-2023
 * @description Middleware function to attach the 'error' function to the 'res' object
 * @param {Object} req - The Express request object.
 * @param {Object} res - The Express response object.
 * @param {function} next - The callback function to pass control to the next middleware.
 * @returns {void}
*/
function errorResponse(req, res, next) {
    res.error = error;
    next();
}

module.exports = errorResponse;