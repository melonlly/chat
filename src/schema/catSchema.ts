const Joi = require('@hapi/joi')

const catSchema = Joi.object({
    name: Joi.string().required(),
    age: Joi.number().positive().integer(),
    weight: Joi.number().positive(),
})

export default catSchema