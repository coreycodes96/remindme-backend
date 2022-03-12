import mongoose from 'mongoose';

const reminderSchema = mongoose.Schema({
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: () => new Date()
    }
});

const Reminder = mongoose.model('Reminder', reminderSchema);

export default Reminder;