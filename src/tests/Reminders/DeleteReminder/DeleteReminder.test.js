import {
    connect,
    closeDatabase,
    clearDatabase,
} from "../../db-handler.js";

import { removeReminder } from "../../../services/reminders/reminders.service.js";

describe('delete reminder', () => {
    //Connect
    beforeAll(async () => await connect());

    //Clear database
    afterEach(async () => await clearDatabase());

    //Close database
    afterAll(async () => await closeDatabase());

    test('this should delete a reminder', done => {
        const id = "622534838ffe6ebf801fdef0";

        removeReminder(id)
            .then(() => {
                done();
            })
            .catch(error => done(error))
    });
});