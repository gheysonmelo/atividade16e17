import { Router } from 'express';
import * as controller from '../controllers/OrderDetailController';
import { OrderDetailCreateValidation, OrderDetailUpdateValidation } from '../validation/OrderDetailValidation';

const router = Router();

router.get('/', controller.getAll);

router.get('/:id', controller.getById);

router.post('/', OrderDetailCreateValidation ,controller.create);

router.put('/:id', OrderDetailUpdateValidation ,controller.updateById);

router.delete('/:id', controller.deleteById);

export default router;