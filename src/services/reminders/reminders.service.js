import Reminder from "../../models/Reminder.js";

//Fetching the users reminders
export const fetchReminders = async id => {
    try {
        const reminders = await Reminder.find({ user: id })
            .sort({ createdAt: -1 })
            .populate('user', 'username');

        return reminders;
    } catch (error) {
        throw new Error(error);
    }
}

//Creating a reminder
export const newReminder = async (id, data) => {
    try {
        const newReminder = await Reminder.create({ ...data, user: id });
        await newReminder.populate('user', 'username');

        return newReminder;
    } catch (error) {
        throw new Error(error);
    }
}

//Deleting a reminder
export const removeReminder = async id => {
    try {
        await Reminder.findByIdAndDelete(id);

        return 'Reminder deleted';
    } catch (error) {
        throw new Error(error);
    }
}