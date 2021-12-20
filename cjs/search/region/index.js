"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchRegion = void 0;
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
function byCode(code, limit) {
    var tempRegions = [];
    constants_1.regions.forEach(function (region) {
        if (region.code.includes(code)) {
            tempRegions.push(region);
        }
    });
    return limit ? tempRegions.slice(0, limit) : tempRegions;
}
exports.searchRegion = {
    byName: byName,
    byCode: byCode,
};
