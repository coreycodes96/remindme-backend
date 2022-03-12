import {
    connect,
    closeDatabase,
    clearDatabase,
} from "../../db-handler.js";

import { fetchReminders } from "../../../services/reminders/reminders.service.js";

describe('get reminders', () => {
    //Connect
    beforeAll(async () => await connect());

    //Clear database
    afterEach(async () => await clearDatabase());

    //Close database
    afterAll(async () => await closeDatabase());

    test('this should get all the reminders belonging to a certain user', done => {
        const id = "6225327801a3177ecefe2193";

        fetchReminders(id)
            .then(() => {
                done();
            })
            .catch(error => done(error))
    });
});