import { regions } from '../../constants';
import { Region } from '../../types';

function byName(name: string, limit?: number): Region[] {
  const tempRegions: Region[] = [];
  regions.forEach((region: Region) => {
    if (region.slug.includes(name)) {
      tempRegions.push(region);
    }
  });
  return limit ? tempRegions.slice(0, limit) : tempRegions;
}

function byCode(code: string, limit?: number): Region[] {
  const tempRegions: Region[] = [];
  regions.forEach((region: Region) => {
    if (region.code.includes(code)) {
      tempRegions.push(region);
    }
  });
  return limit ? tempRegions.slice(0, limit) : tempRegions;
}

export const searchRegion = {
  byName,
  byCode,
};
