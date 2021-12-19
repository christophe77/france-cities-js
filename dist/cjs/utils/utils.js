"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.objectToStringParameters = void 0;
function objectToStringParameters(params) {
    var formattedParams = '';
    Object.keys(params).map(function (param) {
        formattedParams = formattedParams + "&".concat(param, "=").concat(params[param]);
    });
    return formattedParams;
}
exports.objectToStringParameters = objectToStringParameters;
