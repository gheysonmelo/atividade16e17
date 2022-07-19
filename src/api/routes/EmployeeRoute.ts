import { Router } from 'express';
import * as controller from '../controllers/EmployeeController';
import { EmployeeCreateValidation, EmployeeUpdateValidation } from '../validation/EmployeeValidation';

const router = Router();

router.get('/', controller.getAll);

router.get('/:id', controller.getById);

router.post('/', EmployeeCreateValidation ,controller.create);

router.put('/:id', EmployeeUpdateValidation ,controller.updateById);

router.delete('/:id', controller.deleteById);

export default router;