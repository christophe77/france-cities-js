import { regions } from '../../constants';
import { Region } from '../../types';

export function byName(name: string, limit?: number): Region[] {
  const tempRegions: Region[] = [];
  regions.forEach((region: Region) => {
    if (region.slug.includes(name)) {
      tempRegions.push(region);
    }
  });
  return limit ? tempRegions.slice(0, limit) : tempRegions;
}

export function byCode(code: string, limit?: number): Region[] {
  const tempRegions: Region[] = [];
  regions.forEach((region: Region) => {
    if (region.code.includes(code)) {
      tempRegions.push(region);
    }
  });
  return limit ? tempRegions.slice(0, limit) : tempRegions;
}
