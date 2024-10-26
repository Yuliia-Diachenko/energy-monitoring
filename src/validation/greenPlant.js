import Joi from 'joi';

export const createGreenPlantValidationSchema =  Joi.object({
    DateStart: Joi.date().required().label('Date Start'),
    DateEnd: Joi.date().required().label('Date End'),
    Year: Joi.number().required().label('Year'),
    Month: Joi.number().default(0).required().label('Month'),
    PowerPlantType: Joi.string().valid("Biomass", "Biogas", "Solar", "Wind", "Hydro").required().label('Power Plant Type'),
    GeneratedElectricityAmount: Joi.number().default(0).required().label('Generated Electricity Amount'),

});

export const updateGreenPlantValidationSchema =  Joi.object({
    DateStart: Joi.date().label('Date Start'),
    DateEnd: Joi.date().label('Date End'),
    Year: Joi.number().optional().label('Year'),
    Month: Joi.number().default(0).label('Month'),
    PowerPlantType: Joi.string().valid("Biomass", "Biogas", "Solar", "Wind", "Hydro").label('Power Plant Type'),
    GeneratedElectricityAmount: Joi.number().default(0).label('Generated Electricity Amount'),

});
