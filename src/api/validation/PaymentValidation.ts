import { celebrate, Joi, Segments } from "celebrate";

export const PaymentCreateValidation = celebrate({
    [Segments.BODY]: Joi.object().keys({
        customerNumber: Joi.number().required(),
        checkNumber: Joi.string().required(),
        paymentDate: Joi.string().required(),
        amount: Joi.number().required(),
    })
});

export const PaymentUpdateValidation = celebrate({
    [Segments.BODY]: Joi.object().keys({
        customerNumber: Joi.number(),
        checkNumber: Joi.string(),
        paymentDate: Joi.string(),
        amount: Joi.number(),
    }).min(1)
})