import { Department } from '../../types';
declare function byName(name: string, limit?: number): Department[];
declare function byDepartmentCode(departmentCode: string, limit?: number): Department[];
declare function byRegionCode(regionCode: string, limit?: number): Department[];
export declare const searchDepartment: {
    byName: typeof byName;
    byDepartmentCode: typeof byDepartmentCode;
    byRegionCode: typeof byRegionCode;
};
export {};
