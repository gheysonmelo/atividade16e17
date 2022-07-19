import { celebrate, Joi, Segments } from "celebrate";

export const OrderCreateValidation = celebrate({
    [Segments.BODY]: Joi.object().keys({
        orderNumber: Joi.number().required(),
        orderDate: Joi.string().required(),
        requiredDate: Joi.string().required(),
        shippedDate: Joi.string().required(),
        status: Joi.string().required(),
        comments: Joi.string().required(),
        customerNumber: Joi.number().required(),
    })
});

export const OrderUpdateValidation = celebrate({
    [Segments.BODY]: Joi.object().keys({
        orderNumber: Joi.number(),
        orderDate: Joi.string(),
        requiredDate: Joi.string(),
        shippedDate: Joi.string(),
        status: Joi.string(),
        comments: Joi.string(),
        customerNumber: Joi.number(),
    }).min(1)
})
