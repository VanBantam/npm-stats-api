"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Custom Exception definitions
 *
 * @param {Object} err: object from npm API status code and response body
 * @returns void
 */
var NpmException = /** @class */ (function () {
    function NpmException(err) {
        this.message = err.message;
        this.name = 'NpmException';
        if (!err.response) {
            this.statusCode = 500;
            this.body = __assign({}, err);
        }
        else if (Number(err.status) >= 400) {
            var error = err.response.error;
            this.statusCode = err.status;
            this.body = __assign({ path: error.path }, JSON.parse(error.text));
        }
    }
    return NpmException;
}());
exports.default = NpmException;
