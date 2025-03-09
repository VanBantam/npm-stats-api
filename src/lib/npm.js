"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.details = exports.stat = void 0;
var request_1 = require("./request");
/**
 * Get module stats
 *
 * @param {String} pkg: module name
 * @param {String} start: Start date of search period
 * @param {String} end: End date of search period
 * @returns Promise object
 */
var stat = function (pkg, start, end) {
    var url = "https://api.npmjs.org/downloads/point/".concat(start, ":").concat(end, "/").concat(pkg ? pkg : "");
    return (0, request_1.default)(url);
};
exports.stat = stat;
/**
 * Get module detail info
 *
 * @param {String} pkg: module name
 * @returns Promise object
 */
var details = function (pkg) {
    var url = "https://registry.npmjs.org/".concat(pkg ? pkg : "");
    return (0, request_1.default)(url);
};
exports.details = details;
