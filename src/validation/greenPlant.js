import Joi from 'joi';

export const createGreenPlantValidationSchema = Joi.object({
    DateStart: Joi.string().required().messages({
        'string.base': 'Date Start should be a string in the format "dd.MM.yyyy"',
        'string.empty': 'Date Start cannot be empty',
        'any.required': 'Date Start is required'
    }).label('Date Start'),
    DateEnd: Joi.string().required().messages({
        'string.base': 'Date End should be a string in the format "dd.MM.yyyy"',
        'string.empty': 'Date End cannot be empty',
        'any.required': 'Date End is required'
    }).label('Date End'),
    Year: Joi.number().required().messages({
        'number.base': 'Year should be a number',
        'number.empty': 'Year cannot be empty',
        'any.required': 'Year is required'
    }).label('Year'),
    Month: Joi.number().default(0).messages({
        'number.base': 'Month should be a number',
        'number.empty': 'Month cannot be empty',
    }).label('Month'),
    PowerPlantType: Joi.string().valid("Biomass", "Biogas", "Solar", "Wind", "Hydro").required().messages({
        'string.base': 'Power Plant Type should be a string',
        'string.empty': 'Power Plant Type cannot be empty',
        'any.required': 'Power Plant Type is required',
        'any.only': 'Power Plant Type must be one of ["Biomass", "Biogas", "Solar", "Wind", "Hydro"]'
    }).label('Power Plant Type'),
    GeneratedElectricityAmount: Joi.number().required().messages({
        'number.base': 'Generated Electricity Amount should be a number',
        'number.empty': 'Generated Electricity Amount cannot be empty',
        'any.required': 'Generated Electricity Amount is required'
    }).label('Generated Electricity Amount'),
    Unit: Joi.string().valid("MillionKWh").required().default("MillionKWh").messages({
        'string.base': 'Unit should be a string',
        'string.empty': 'Unit cannot be empty',
        'any.required': 'Unit is required',
        'any.only': 'Unit must be "MillionKWh"'
    }).label('Unit'),
});




export const updateGreenPlantValidationSchema =  Joi.object({
    DateStart: Joi.string().messages({
        'string.base': 'Date Start should be a string in the format "dd.MM.yyyy"',
        'string.empty': 'Date Start cannot be empty',
        'any.required': 'Date Start is required'
    }).label('Date Start'),
    DateEnd: Joi.string().messages({
        'string.base': 'Date End should be a string in the format "dd.MM.yyyy"',
        'string.empty': 'Date End cannot be empty',
        'any.required': 'Date End is required'
    }).label('Date End'),
    Year: Joi.number().messages({
        'number.base': 'Year should be a number',
        'number.empty': 'Year cannot be empty',
        'any.required': 'Year is required'
    }).label('Year'),
    Month: Joi.number().messages({
        'number.base': 'Month should be a number',
        'number.empty': 'Month cannot be empty',
    }).label('Month'),
    PowerPlantType: Joi.string().valid("Biomass", "Biogas", "Solar", "Wind", "Hydro").messages({
        'string.base': 'Power Plant Type should be a string',
        'string.empty': 'Power Plant Type cannot be empty',
        'any.required': 'Power Plant Type is required',
        'any.only': 'Power Plant Type must be one of ["Biomass", "Biogas", "Solar", "Wind", "Hydro"]'
    }).label('Power Plant Type'),
    GeneratedElectricityAmount: Joi.number().messages({
        'number.base': 'Generated Electricity Amount should be a number',
        'number.empty': 'Generated Electricity Amount cannot be empty',
        'any.required': 'Generated Electricity Amount is required'
    }).label('Generated Electricity Amount'),
    Unit: Joi.string().valid("MillionKWh").default("MillionKWh").messages({
        'string.base': 'Unit should be a string',
        'string.empty': 'Unit cannot be empty',
        'any.required': 'Unit is required',
        'any.only': 'Unit must be "MillionKWh"'
    }).label('Unit'),

});
