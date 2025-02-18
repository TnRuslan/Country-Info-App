import Joi from 'joi';

export const countrySchema = Joi.object({
	country: Joi.string().required(),
});
