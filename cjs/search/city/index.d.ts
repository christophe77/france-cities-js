import { City } from '../../types';
declare function byName(name: string, limit?: number): City[];
declare function byZipCode(zipCode: string, limit?: number): City[];
declare function byInseeCode(inseeCode: string, limit?: number): City[];
declare function byDepartmentCode(departmentCode: string, limit?: number): City[];
export declare const searchCity: {
    byName: typeof byName;
    byDepartmentCode: typeof byDepartmentCode;
    byInseeCode: typeof byInseeCode;
    byZipCode: typeof byZipCode;
};
export {};
