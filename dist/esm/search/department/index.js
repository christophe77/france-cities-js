import { departments } from '../../constants';
export function byName(name, limit) {
    var tempDepartments = [];
    departments.forEach(function (department) {
        if (department.slug.includes(name)) {
            tempDepartments.push(department);
        }
    });
    return limit ? tempDepartments.slice(0, limit) : tempDepartments;
}
export function byDepartmentCode(departmentCode, limit) {
    var tempDepartments = [];
    departments.forEach(function (department) {
        if (department.code.includes(departmentCode)) {
            tempDepartments.push(department);
        }
    });
    return limit ? tempDepartments.slice(0, limit) : tempDepartments;
}
export function byRegionCode(regionCode, limit) {
    var tempDepartments = [];
    departments.forEach(function (department) {
        if (department.region_code.includes(regionCode)) {
            tempDepartments.push(department);
        }
    });
    return limit ? tempDepartments.slice(0, limit) : tempDepartments;
}
