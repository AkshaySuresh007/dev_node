/**
 * @author Akshay Suresh 08-11-2023
 * @description Function to send a success response message in the customized format
 * @param {any} data - Data to be included in the success response.
 * @param {string} message - A message describing the success (default: "Success").
 * @param {number} status - The HTTP response status code (default: 200).
 * @returns {void}
 */
function success(data, message = "Success", status = 200) {
    const resObj = {
        success: true,
        message,
        data,
    }

    this.status(status).json(resObj);
}

/**
 * @author Akshay Suresh 08-11-2023
 * @description Middleware function to attach the 'success' function to the 'res' object
 * @param {Object} req - The Express request object.
 * @param {Object} res - The Express response object.
 * @param {function} next - The callback function to pass control to the next middleware.
 * @returns {void}
*/
function successResponse(req, res, next) {
    res.success = success;
    next();
}

module.exports = successResponse;