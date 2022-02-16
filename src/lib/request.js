import request from "superagent";
import formatResponse from "./formatResponse";
import NpmException from "./npmException";

/**
 * Body module that calls the API
 *
 * @param {String} url: request URL with params
 * @returns {Object} object from npm API status code and response body
 */
const load = (url) => {
  return request
    .get(url)
    .timeout({
      response: 3 * 1000,
      deadline: 5 * 1000,
    })
    .then(({ res, body }) => formatResponse({
      statusCode: res.statusCode,
      body: body,
    }))
    .catch(err => {
      const obj = new NpmException(err)
      throw obj;
    });
  };

module.exports = load;