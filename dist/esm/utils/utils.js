export function objectToStringParameters(params) {
    var formattedParams = '';
    Object.keys(params).map(function (param) {
        formattedParams = formattedParams + "&".concat(param, "=").concat(params[param]);
    });
    return formattedParams;
}
