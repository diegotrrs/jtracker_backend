/**
 * Sends an error back to the client with error as message.
 * @param {Response} res an express response object.
 * @param {Object} err an error object or string with description of the error.
 */
export const error = (res, err) => {
  res.type('json');
  res.status = 500;
  res.json({
    status: 'error',
    message: err !== undefined ? JSON.stringify(err) : 'An unhandled error happened.',
  });
};

/**
 * Sorts an Object representing a result set by its attributes.
 * @param {Object} resultSet
 */
export const sort = (resultSet) => {
  JSON.stringify(resultSet, Object.keys(resultSet).sort());
};

/**
 * Sends a successful response to the client with an optional json object as part of the result.
 * @param {Response} res an express response object.
 * @param {Object} result data  needed to be sent back to the client wrapped on a result object.
 */
export const success = (res, result) => {
  // First, sort the result set
  // sort(result);
  // result = JSON.stringify(result, Object.keys(result).sort());
  const rs = {};
  rs.status = 'ok';

  // if result object is provided, return it, else just success.
  if (result !== undefined || result != null) {
    rs.result = result;
  }

  res.type('json');
  res.status = 200;
  res.json(rs);
};
