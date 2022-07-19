import { celebrate, Joi, Segments } from "celebrate";

export const OrderDetailCreateValidation = celebrate({
    [Segments.BODY]: Joi.object().keys({
        orderNumber: Joi.number().required(),
        productCode: Joi.string().required(),
        quantityOrdered: Joi.number().required(),
        priceEach: Joi.number().required(),
        orderLineNumber: Joi.number().required()
    })
});

export const OrderDetailUpdateValidation = celebrate({
    [Segments.BODY]: Joi.object().keys({
        orderNumber: Joi.number(),
        productCode: Joi.string(),
        quantityOrdered: Joi.number(),
        priceEach: Joi.number(),
        orderLineNumber: Joi.number()
    }).min(1)
})