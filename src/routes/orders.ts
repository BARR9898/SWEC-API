import { Router } from "express";
import { getItems } from "../controllers/orders";
import { checkJWT } from "../middleware/session";

const router = Router()

router.get("/" , checkJWT, getItems)

export {router};