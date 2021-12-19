"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchDepartment = void 0;
var constants_1 = require("../../constants");
function byName(name, limit) {
    var tempDepartments = [];
    constants_1.departments.forEach(function (department) {
        if (department.slug.includes(name)) {
            tempDepartments.push(department);
        }
    });
    return limit ? tempDepartments.slice(0, limit) : tempDepartments;
}
function byDepartmentCode(departmentCode, limit) {
    var tempDepartments = [];
    constants_1.departments.forEach(function (department) {
        if (department.code.includes(departmentCode)) {
            tempDepartments.push(department);
        }
    });
    return limit ? tempDepartments.slice(0, limit) : tempDepartments;
}
function byRegionCode(regionCode, limit) {
    var tempDepartments = [];
    constants_1.departments.forEach(function (department) {
        if (department.region_code.includes(regionCode)) {
            tempDepartments.push(department);
        }
    });
    return limit ? tempDepartments.slice(0, limit) : tempDepartments;
}
exports.searchDepartment = {
    byName: byName,
    byDepartmentCode: byDepartmentCode,
    byRegionCode: byRegionCode,
};
