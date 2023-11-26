import Joi from "joi"


export interface IProducts {
    id: number,
    name: string,
    price: number
}
export const SchemaProducts = Joi.object({
    id: Joi.number(),
    name: Joi.string().trim().required().messages({
        "string.empty": "Name is required"
    }),
    price: Joi.number().positive().required().messages({
        "string.empty": "Price is required",
        "string.positive": "Price is positive "
    })
})

