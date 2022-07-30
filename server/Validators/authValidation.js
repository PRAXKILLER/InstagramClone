import joi from "joi";

export const ValidateSignup = (userData) => {
    const Scheme = joi.object({
        userName: joi.string().required().max(20).min(5),
        email: joi.string().email().required(),
        password: joi.string().required().min(5),
        name: joi.string().min(3).max(20)
    })

    return Scheme.validateAsync(userData);
}

export const ValidateSignin = (userData) => {
    const Scheme = joi.object({
        userName: joi.string().max(20).min(5),
        email: joi.string().email(),
        password: joi.string().required().min(5),
    })

    return Scheme.validateAsync(userData);
}