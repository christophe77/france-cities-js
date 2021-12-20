"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchCity = void 0;
var constants_1 = require("../../constants");
function byName(name, limit) {
    var tempCities = [];
    constants_1.cities.forEach(function (city) {
        if (city.slug.includes(name)) {
            tempCities.push(city);
        }
    });
    return limit ? tempCities.slice(0, limit) : tempCities;
}
function byZipCode(zipCode, limit) {
    var tempCities = [];
    constants_1.cities.forEach(function (city) {
        if (city.zip_code.includes(zipCode)) {
            tempCities.push(city);
        }
    });
    return limit ? tempCities.slice(0, limit) : tempCities;
}
function byInseeCode(inseeCode, limit) {
    var tempCities = [];
    constants_1.cities.forEach(function (city) {
        if (city.insee_code.includes(inseeCode)) {
            tempCities.push(city);
        }
    });
    return limit ? tempCities.slice(0, limit) : tempCities;
}
function byDepartmentCode(departmentCode, limit) {
    var tempCities = [];
    constants_1.cities.forEach(function (city) {
        if (city.department_code.includes(departmentCode)) {
            tempCities.push(city);
        }
    });
    return limit ? tempCities.slice(0, limit) : tempCities;
}
exports.searchCity = {
    byName: byName,
    byDepartmentCode: byDepartmentCode,
    byInseeCode: byInseeCode,
    byZipCode: byZipCode,
};
