import { regions } from '../../constants';
function byName(name, limit) {
    var tempRegions = [];
    regions.forEach(function (region) {
        if (region.slug.includes(name)) {
            tempRegions.push(region);
        }
    });
    return limit ? tempRegions.slice(0, limit) : tempRegions;
}
function byCode(code, limit) {
    var tempRegions = [];
    regions.forEach(function (region) {
        if (region.code.includes(code)) {
            tempRegions.push(region);
        }
    });
    return limit ? tempRegions.slice(0, limit) : tempRegions;
}
export var searchRegion = {
    byName: byName,
    byCode: byCode,
};
