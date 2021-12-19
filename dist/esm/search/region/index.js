import { regions } from '../../constants';
export function byName(name, limit) {
    var tempRegions = [];
    regions.forEach(function (region) {
        if (region.slug.includes(name)) {
            tempRegions.push(region);
        }
    });
    return limit ? tempRegions.slice(0, limit) : tempRegions;
}
export function byCode(code, limit) {
    var tempRegions = [];
    regions.forEach(function (region) {
        if (region.code.includes(code)) {
            tempRegions.push(region);
        }
    });
    return limit ? tempRegions.slice(0, limit) : tempRegions;
}
