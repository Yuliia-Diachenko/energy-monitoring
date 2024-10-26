import { SORT_ORDER } from "../constants/index.js";

const parseSortOrder = (sortOrder) => {
    const isKnownOrder = [SORT_ORDER.ASC, SORT_ORDER.DESC].includes(sortOrder);
    if (isKnownOrder) return sortOrder;
    return SORT_ORDER.ASC;
};

const parseSortByThermal = (sortBy) => {
    const keysOfThermal = [
        "_id",
        "DateStart",
        "DateEnd",
        "Year",
        "PowerPlantType",
        "HeatOutputAmount",
        "Unit"
    ];
    if (keysOfThermal.includes(sortBy)) {
        return sortBy;
    }
    return '_id';
};

export const parseThermalSortParams = (query) => {
    const { sortOrder, sortBy } = query;

    const parsedSortOrder = parseSortOrder(sortOrder);
    const parsedSortBy = parseSortByThermal(sortBy);

    return {
      sortOrder: parsedSortOrder,
      sortBy: parsedSortBy,
    };
  };
