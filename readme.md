# FRANCE CITIES JS

Search and get informations about french cities from the package offline database.<br/>
Database comes from [Stanislas-Poisson/French-zip-code](https://github.com/Stanislas-Poisson/French-zip-code)

## Installation

    yarn add "france-cities-js"

    npm install --save "france-cities-js"

## Usage

    // ESM
    import { searchCity, searchDepartment, searchRegion } from "france-cities-js";
    // CJS
    const { searchCity, searchDepartment, searchRegion } = require("france-cities-js");

    // parameters : string to search and limit number of results
    const cities1 = searchCity.byName("plou", 10);
    const cities2 = searchCity.byDepartmentCode("29", 10);
    const cities2 = searchCity.byInseeCode("010", 10);
    const cities3 = searchCity.byZipCode("772", 10);

    const departments1 = searchDepartment.byName("seine", 10);
    const departments2 = searchDepartment.byDepartmentCode("56", 10);
    const departments3 = searchDepartment.byRegionCode("8", 10);

    const regions1 = searchRegion.byName("re", 10);
    const regionn2 = searchRegion.byCode("8", 10);

## Types

    type City = {
        id: number;
        department_code: string;
        insee_code: string;
        zip_code: string;
        name: string;
        slug: string;
        gps_lat: number;
        gps_lng: number;
    };

    type Department = {
        id: number;
        code: string;
        region_code: string;
        name: string;
        slug: string;
    };

    type Region = {
        id: number;
        code: string;
        name: string;
        slug: string;
    };
