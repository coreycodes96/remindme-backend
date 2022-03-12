import Reminder from "../../models/Reminder.js";
import { newReminder } from "../../services/reminders/reminders.service.js";

export const createReminder = async (req, res) => {
    const { id } = res.locals.user;
    const { body } = req;
    const { time } = req.body;

    try {
        //Checking if the time has already been taken
        const doesTimeExist = await Reminder.findOne({ user: id, time });
        if (doesTimeExist) return res.status(422).json([{ name: 'time' }, { message: 'You already have a reminder with this time' }]);

        //Create a reminder
        const reminder = await newReminder(id, body);

        return res.status(201).json(reminder);
    } catch (error) {
        throw new Error(error);
    }
}