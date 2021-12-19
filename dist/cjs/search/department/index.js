"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.byRegionCode = exports.byDepartmentCode = exports.byName = void 0;
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
exports.byName = byName;
function byDepartmentCode(departmentCode, limit) {
    var tempDepartments = [];
    constants_1.departments.forEach(function (department) {
        if (department.code.includes(departmentCode)) {
            tempDepartments.push(department);
        }
    });
    return limit ? tempDepartments.slice(0, limit) : tempDepartments;
}
exports.byDepartmentCode = byDepartmentCode;
function byRegionCode(regionCode, limit) {
    var tempDepartments = [];
    constants_1.departments.forEach(function (department) {
        if (department.region_code.includes(regionCode)) {
            tempDepartments.push(department);
        }
    });
    return limit ? tempDepartments.slice(0, limit) : tempDepartments;
}
exports.byRegionCode = byRegionCode;
