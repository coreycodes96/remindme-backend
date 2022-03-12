import express from "express";

const router = express.Router();

//Controllers
import { getReminders } from "../controllers/Reminders/GetRemindersController.js";
import { createReminder } from "../controllers/Reminders/CreateReminderController.js";
import { deleteReminder } from "../controllers/Reminders/DeleteReminderController.js";

//Middleware
import protectUser from "../middleware/protectUser.js";

//Routes
router.get('/', [protectUser], getReminders);
router.post('/create', [protectUser], createReminder);
router.delete('/delete/:id', [protectUser], deleteReminder);

export default router;