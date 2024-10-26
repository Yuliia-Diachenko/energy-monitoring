import Joi from 'joi';

export const createThermalPlantValidationSchema = Joi.object({
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
    PowerPlantType: Joi.string().valid(
        "heat power plants",
        "combined heat and power plants",
        "nuclear power plants",
        "heat plants",
        "utilization units",
        "other units"
    ).required().messages({
        'string.base': 'Power Plant Type should be a string',
        'string.empty': 'Power Plant Type cannot be empty',
        'any.required': 'Power Plant Type is required',
        'any.only': 'Power Plant Type must be one of ["heat power plants", "combined heat and power plants", "nuclear power plants", "heat plants", "utilization units", "other units"]'
    }).label('Power Plant Type'),
    HeatOutputAmount: Joi.number().required().messages({
        'number.base': 'Heat Output Amount should be a number',
        'number.empty': 'Heat Output Amount cannot be empty',
        'any.required': 'Heat Output Amount is required'
    }).label('Heat Output Amount'),
    Unit: Joi.string().valid("MillionKWh").required().default("MillionKWh").messages({
        'string.base': 'Unit should be a string',
        'string.empty': 'Unit cannot be empty',
        'any.required': 'Unit is required',
        'any.only': 'Unit must be "MillionKWh"'
    }).label('Unit'),
});

export const updateThermalPlantValidationSchema = Joi.object({
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
    PowerPlantType: Joi.string().valid(
        "heat power plants",
        "combined heat and power plants",
        "nuclear power plants",
        "heat plants",
        "utilization units",
        "other units"
    ).messages({
        'string.base': 'Power Plant Type should be a string',
        'string.empty': 'Power Plant Type cannot be empty',
        'any.required': 'Power Plant Type is required',
        'any.only': 'Power Plant Type must be one of ["heat power plants", "combined heat and power plants", "nuclear power plants", "heat plants", "utilization units", "other units"]'
    }).label('Power Plant Type'),
    HeatOutputAmount: Joi.number().messages({
        'number.base': 'Heat Output Amount should be a number',
        'number.empty': 'Heat Output Amount cannot be empty',
        'any.required': 'Heat Output Amount is required'
    }).label('Heat Output Amount'),
    Unit: Joi.string().valid("MillionKWh").default("MillionKWh").messages({
        'string.base': 'Unit should be a string',
        'string.empty': 'Unit cannot be empty',
        'any.required': 'Unit is required',
        'any.only': 'Unit must be "MillionKWh"'
    }).label('Unit'),
});
