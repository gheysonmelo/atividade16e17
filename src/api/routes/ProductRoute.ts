import { Router } from 'express';
import * as controller from '../controllers/ProductController';
import { ProductCreateValidation, ProductUpdateValidation } from '../validation/ProductValidation';

const router = Router();

router.get('/', controller.getAll);

router.get('/:id', controller.getById);

router.post('/', ProductCreateValidation ,controller.create);

router.put('/:id', ProductUpdateValidation ,controller.updateById);

router.delete('/:id', controller.deleteById);

export default router;