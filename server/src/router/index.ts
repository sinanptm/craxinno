import { Router } from "express";
import createUserController from "../controller/createUserController";
import addPersonalInfoController from "../controller/addPersonalInfoController";
import errorHandler from "../middleware/errorHandler";

const router = Router();

router.post("/createUser", createUserController);
router.put("/addUserInfo", addPersonalInfoController);

router.use(errorHandler)

export default router;