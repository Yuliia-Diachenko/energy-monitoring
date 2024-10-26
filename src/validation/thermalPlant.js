import Joi from 'joi';

export const createThermalPlantValidationSchema = Joi.object({
    DateStart: Joi.number().required().label('Date Start'),
    DateEnd: Joi.number().required().label('Date End'),
    Year: Joi.number().required().label('Year'),
    PowerPlantType: Joi.string().valid(
        "heat power plants",
        "combined heat and power plants",
        "nuclear power plants",
        "heat plants",
        "utilization units",
        "other units"
    ).required().label('Power Plant Type'),
    HeatOutputAmount: Joi.number().required().label('Heat Output Amount'),
});

export const updateThermalPlantValidationSchema = Joi.object({
    DateStart: Joi.number().label('Date Start'),
    DateEnd: Joi.number().label('Date End'),
    Year: Joi.number().label('Year'),
    PowerPlantType: Joi.string().valid(
        "heat power plants",
        "combined heat and power plants",
        "nuclear power plants",
        "heat plants",
        "utilization units",
        "other units"
    ).label('Power Plant Type'),
    HeatOutputAmount: Joi.number().label('Heat Output Amount'),
});
