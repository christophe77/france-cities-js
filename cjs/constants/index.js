"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.regions = exports.departments = exports.cities = void 0;
var cities_json_1 = __importDefault(require("../../database/cities.json"));
exports.cities = cities_json_1.default;
var departments_json_1 = __importDefault(require("../../database/departments.json"));
exports.departments = departments_json_1.default;
var regions_json_1 = __importDefault(require("../../database/regions.json"));
exports.regions = regions_json_1.default;
