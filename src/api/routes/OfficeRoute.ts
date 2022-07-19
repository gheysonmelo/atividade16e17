import { Router } from 'express';
import * as controller from '../controllers/OfficeController';
import { OfficeCreateValidation, OfficeUpdateValidation } from '../validation/OfficeValidation';

const router = Router();

router.get('/', controller.getAll);

router.get('/:id', controller.getById);

router.post('/', OfficeCreateValidation ,controller.create);

router.put('/:id', OfficeUpdateValidation ,controller.updateById);

router.delete('/:id', controller.deleteById);

export default router;