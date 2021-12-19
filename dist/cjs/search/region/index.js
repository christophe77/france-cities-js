"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.byCode = exports.byName = void 0;
var constants_1 = require("../../constants");
function byName(name, limit) {
    var tempRegions = [];
    constants_1.regions.forEach(function (region) {
        if (region.slug.includes(name)) {
            tempRegions.push(region);
        }
    });
    return limit ? tempRegions.slice(0, limit) : tempRegions;
}
exports.byName = byName;
function byCode(code, limit) {
    var tempRegions = [];
    constants_1.regions.forEach(function (region) {
        if (region.code.includes(code)) {
            tempRegions.push(region);
        }
    });
    return limit ? tempRegions.slice(0, limit) : tempRegions;
}
exports.byCode = byCode;
