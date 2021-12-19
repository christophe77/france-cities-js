import { cities } from '../../constants';
function byName(name, limit) {
    var tempCities = [];
    cities.forEach(function (city) {
        if (city.slug.includes(name)) {
            tempCities.push(city);
        }
    });
    return limit ? tempCities.slice(0, limit) : tempCities;
}
function byZipCode(zipCode, limit) {
    var tempCities = [];
    cities.forEach(function (city) {
        if (city.zip_code.includes(zipCode)) {
            tempCities.push(city);
        }
    });
    return limit ? tempCities.slice(0, limit) : tempCities;
}
function byInseeCode(inseeCode, limit) {
    var tempCities = [];
    cities.forEach(function (city) {
        if (city.insee_code.includes(inseeCode)) {
            tempCities.push(city);
        }
    });
    return limit ? tempCities.slice(0, limit) : tempCities;
}
function byDepartmentCode(departmentCode, limit) {
    var tempCities = [];
    cities.forEach(function (city) {
        if (city.department_code.includes(departmentCode)) {
            tempCities.push(city);
        }
    });
    return limit ? tempCities.slice(0, limit) : tempCities;
}
export var searchCity = {
    byName: byName,
    byDepartmentCode: byDepartmentCode,
    byInseeCode: byInseeCode,
    byZipCode: byZipCode,
};
