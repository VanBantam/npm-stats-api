require("babel-polyfill");

import * as superagent from "superagent";
import NpmException from "./npmException";
import type { ErrorType } from "../../index.d";

/**
 * Body module that calls the API
 *
 * @param {String} url: request URL with params
 * @returns {Object} object from npm API status code and response body
 */
const load = async (url: string) => {
  try {
    const { status, body } = await superagent
      .get(url)
      .timeout({
        response: 3 * 2000,
        deadline: 5 * 2000,
      });
    return {
      statusCode: status,
      body,
    };
  } catch (err) {
    const obj: ErrorType = new NpmException(err);
    throw obj;
  }
};

export default load;
