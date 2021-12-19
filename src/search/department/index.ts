import { departments } from '../../constants';
import { Department } from '../../types';

function byName(name: string, limit?: number): Department[] {
  const tempDepartments: Department[] = [];
  departments.forEach((department: Department) => {
    if (department.slug.includes(name)) {
      tempDepartments.push(department);
    }
  });
  return limit ? tempDepartments.slice(0, limit) : tempDepartments;
}
function byDepartmentCode(
  departmentCode: string,
  limit?: number,
): Department[] {
  const tempDepartments: Department[] = [];
  departments.forEach((department: Department) => {
    if (department.code.includes(departmentCode)) {
      tempDepartments.push(department);
    }
  });
  return limit ? tempDepartments.slice(0, limit) : tempDepartments;
}
function byRegionCode(regionCode: string, limit?: number): Department[] {
  const tempDepartments: Department[] = [];
  departments.forEach((department: Department) => {
    if (department.region_code.includes(regionCode)) {
      tempDepartments.push(department);
    }
  });
  return limit ? tempDepartments.slice(0, limit) : tempDepartments;
}

export const searchDepartment = {
  byName,
  byDepartmentCode,
  byRegionCode,
};
