import express from "express";

const router = express.Router();

//Controllers
import { createAnAccount } from "../controllers/Users/CreateAnAccountController.js";
import { login } from "../controllers/Users/LoginController.js";

//Routes
router.post('/create_an_account', createAnAccount);
router.post('/login', login);

export default router;