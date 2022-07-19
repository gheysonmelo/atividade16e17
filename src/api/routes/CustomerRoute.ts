import { Router } from 'express';
import * as controller from '../controllers/CustomerController';
import { CustomerCreateValidation, CustomerUpdateValidation } from '../validation/CustomerValidation';

const router = Router();

router.get('/', controller.getAll);

router.get('/:id', controller.getById);

router.post('/', CustomerCreateValidation ,controller.create);

router.put('/:id', CustomerUpdateValidation ,controller.updateById);

router.delete('/:id', controller.deleteById);

export default router;