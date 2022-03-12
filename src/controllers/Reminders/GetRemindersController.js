import { fetchReminders } from "../../services/reminders/reminders.service.js";

export const getReminders = async (req, res) => {
    const { id } = res.locals.user;

    try {
        //Get reminders
        const reminders = await fetchReminders(id);

        return res.status(200).json(reminders);
    } catch (error) {
        throw new Error(error);
    }
}