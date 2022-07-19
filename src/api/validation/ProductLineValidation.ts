import { celebrate, Joi, Segments } from "celebrate";

export const ProductLineCreateValidation = celebrate({
    [Segments.BODY]: Joi.object().keys({
        productLine: Joi.string().required(),
        textDescription: Joi.string().required(),
        htmlDescription: Joi.string().required(),
        image: Joi.string().required(),
    })
});

export const ProductLineUpdateValidation = celebrate({
    [Segments.BODY]: Joi.object().keys({
        productLine: Joi.string(),
        textDescription: Joi.string(),
        htmlDescription: Joi.string(),
        image: Joi.string(),
    }).min(1)
})