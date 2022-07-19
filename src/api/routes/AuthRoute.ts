import { Router } from "express";
import * as controller from "../controllers/AuthController"
import { AuthSignValidation } from "../validation/AuthValidation";

const router = Router();

router.post("/signUp", AuthSignValidation, controller.signUp);
router.post("/signIn", AuthSignValidation, controller.signIn);

export default router;