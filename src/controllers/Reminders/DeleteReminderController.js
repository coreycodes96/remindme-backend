import { removeReminder } from "../../services/reminders/reminders.service.js";

export const deleteReminder = async (req, res) => {
    const { id } = req.params;

    try {
        //Delete a reminder
        await removeReminder(id);

        return res.status(204).json('Reminder deleted')
    } catch (error) {
        throw new Error(error);
    }
}