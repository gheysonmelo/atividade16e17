import { Router } from 'express';
import * as controller from '../controllers/PaymentController';
import { PaymentCreateValidation, PaymentUpdateValidation } from '../validation/PaymentValidation';

const router = Router();

router.get('/', controller.getAll);

router.get('/:id', controller.getById);

router.post('/', PaymentCreateValidation ,controller.create);

router.put('/:id', PaymentUpdateValidation ,controller.updateById);

router.delete('/:id', controller.deleteById);

export default router;