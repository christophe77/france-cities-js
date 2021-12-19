import { departments } from '../../constants';
function byName(name, limit) {
    var tempDepartments = [];
    departments.forEach(function (department) {
        if (department.slug.includes(name)) {
            tempDepartments.push(department);
        }
    });
    return limit ? tempDepartments.slice(0, limit) : tempDepartments;
}
function byDepartmentCode(departmentCode, limit) {
    var tempDepartments = [];
    departments.forEach(function (department) {
        if (department.code.includes(departmentCode)) {
            tempDepartments.push(department);
        }
    });
    return limit ? tempDepartments.slice(0, limit) : tempDepartments;
}
function byRegionCode(regionCode, limit) {
    var tempDepartments = [];
    departments.forEach(function (department) {
        if (department.region_code.includes(regionCode)) {
            tempDepartments.push(department);
        }
    });
    return limit ? tempDepartments.slice(0, limit) : tempDepartments;
}
export var searchDepartment = {
    byName: byName,
    byDepartmentCode: byDepartmentCode,
    byRegionCode: byRegionCode,
};
