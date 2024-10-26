import { SORT_ORDER } from "../constants/index.js";

const parseSortOrder = (sortOrder) => {
    const isKnownOrder = [SORT_ORDER.ASC, SORT_ORDER.DESC].includes(sortOrder);
    if (isKnownOrder) return sortOrder;
    return SORT_ORDER.ASC;
};

const parseSortByGreen = (sortBy) => {
    const keysOfGreen = [
        "_id",
        "DateStart",
        "DateEnd",
        "Year",
        "Month",
        "PowerPlantType",
        "GeneratedElectricityAmount",
        "Unit"
    ];
    if (keysOfGreen.includes(sortBy)) {
        return sortBy;
    }
    return '_id';
};

export const parseGreenSortParams = (query) => {
    const { sortOrder, sortBy } = query;

    const parsedSortOrder = parseSortOrder(sortOrder);
    const parsedSortBy = parseSortByGreen(sortBy);

    return {
      sortOrder: parsedSortOrder,
      sortBy: parsedSortBy,
    };
  };
