import { Router } from "express";
import createUserController from "../controller/createUserController";
import updateUserInfo from "../controller/updateUserInfo";
import errorHandler from "../middleware/errorHandler";

const router = Router();

router.post("/createUser", createUserController);
router.put("/update/:id", updateUserInfo);

router.use(errorHandler);

export default router;