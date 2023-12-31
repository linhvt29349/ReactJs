import Joi from "joi";


export const SchemaUsers = Joi.object({
    id: Joi.number(),
    name: Joi.string().trim().required().messages({
        "string.empty": "Bắt buộc nhập tên"
    }),
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required().messages({
        "string.empty": "Bắt buộc nhập email",
        "string.email": "Email không đúng định dạng",

    }),
    password: Joi.string().trim().required().messages({
        "string.empty": "Bắt buộc nhập password"
    }),
    passwordConfirm: Joi.string().trim().valid(Joi.ref("password")).required().messages({
        "any.only": "Mật khẩu không khớp"
    }),
    role: Joi.string()
})
export const SchemaUsersSignIN = Joi.object({
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required().messages({
        "string.empty": "Bắt buộc nhập email",
        "string.email": "Email không đúng định dạng",
    }),
    password: Joi.string().trim().required().messages({
        "string.empty": "Bắt buộc nhập password"
    })
})

export interface IUsers {
    id?: number,
    name: string,
    email: string,
    password?: string,
    passwordConfirm?: string,
    role: "admin" | "member"
}
export interface IUsersSignIn {
    email: string,
    password: string,
}