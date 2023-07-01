import Joi from "joi";


export const movieSchema = Joi.object ({
        name: Joi.string().required(),
        aplication: Joi.string().required(),
        genus:Joi.string().required(),
        stats: Joi.boolean().required()
      
})
