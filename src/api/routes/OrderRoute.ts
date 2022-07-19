import { Router } from 'express';
import * as controller from '../controllers/OrderController';
import { OrderCreateValidation, OrderUpdateValidation } from '../validation/OrderValidation';

const router = Router();

router.get('/', controller.getAll);

router.get('/:id', controller.getById);

router.post('/', OrderCreateValidation ,controller.create);

router.put('/:id', OrderUpdateValidation ,controller.updateById);

router.delete('/:id', controller.deleteById);

export default router;