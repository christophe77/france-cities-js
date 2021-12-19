import { cities } from '../../constants';
import { City } from '../../types';

export function byName(name: string, limit?: number): City[] {
  const tempCities: City[] = [];
  cities.forEach((city: City) => {
    if (city.slug.includes(name)) {
      tempCities.push(city);
    }
  });
  return limit ? tempCities.slice(0, limit) : tempCities;
}
export function byZipCode(zipCode: string, limit?: number): City[] {
  const tempCities: City[] = [];
  cities.forEach((city: City) => {
    if (city.zip_code.includes(zipCode)) {
      tempCities.push(city);
    }
  });
  return limit ? tempCities.slice(0, limit) : tempCities;
}
export function byInseeCode(inseeCode: string, limit?: number): City[] {
  const tempCities: City[] = [];
  cities.forEach((city: City) => {
    if (city.insee_code.includes(inseeCode)) {
      tempCities.push(city);
    }
  });
  return limit ? tempCities.slice(0, limit) : tempCities;
}
export function byDepartmentCode(
  departmentCode: string,
  limit?: number,
): City[] {
  const tempCities: City[] = [];
  cities.forEach((city: City) => {
    if (city.department_code.includes(departmentCode)) {
      tempCities.push(city);
    }
  });
  return limit ? tempCities.slice(0, limit) : tempCities;
}
