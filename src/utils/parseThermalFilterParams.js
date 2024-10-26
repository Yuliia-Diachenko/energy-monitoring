const parseThermalPowerPlantType= (PowerPlantType) => {
    const isString = typeof PowerPlantType === 'string';
    if (!isString) return;
    const isGender = (PowerPlantType) => [
        "heat power plants",
        "combined heat and power plants",
        "nuclear power plants",
        "heat plants",
        "utilization units",
        "other units"].includes(PowerPlantType);

    if (isGender(PowerPlantType)) return PowerPlantType;
  };

  export const parseThermalFilterParams = (query) => {
    const { PowerPlantType,
         minDateStart,
         maxDateStart,
         maxDateEnd,
         minDateEnd,
         minGeneratedElectricityAmount,
         maxGeneratedElectricityAmount,
         minHeatOutputAmount,
         maxHeatOutputAmount

 } = query;

 const parseNumber = (number) => {
    const isString = typeof number === 'string';
    if (!isString) return;

    const parsedNumber = parseInt(number);
    if (Number.isNaN(parsedNumber)) {
      return;
    }

    return parsedNumber;
  };

  const parsedThermalPowerPlantType = parseThermalPowerPlantType(PowerPlantType);

  const parsedMinDateStart = parseNumber(minDateStart);
  const parsedMaxDateStart = parseNumber(maxDateStart);
  const parsedMaxDateEnd = parseNumber( maxDateEnd);
  const parsedMinDateEnd = parseNumber(minDateEnd);
  const parsedMinGeneratedElectricityAmount = parseNumber(minGeneratedElectricityAmount);
  const parsedMaxGeneratedElectricityAmount = parseNumber(maxGeneratedElectricityAmount);
  const parsedMinHeatOutputAmount = parseNumber(minHeatOutputAmount);
  const parsedMaxHeatOutputAmount = parseNumber(maxHeatOutputAmount);

  return {
    PowerPlantType: parsedThermalPowerPlantType,
    minDateStart: parsedMinDateStart,
    maxDateStart:  parsedMaxDateStart,
    maxDateEnd: parsedMaxDateEnd,
    minDateEnd: parsedMinDateEnd,
    minGeneratedElectricityAmount: parsedMinGeneratedElectricityAmount,
    maxGeneratedElectricityAmount:parsedMaxGeneratedElectricityAmount,
    minHeatOutputAmount: parsedMinHeatOutputAmount,
    maxHeatOutputAmount: parsedMaxHeatOutputAmount
  };
  };
