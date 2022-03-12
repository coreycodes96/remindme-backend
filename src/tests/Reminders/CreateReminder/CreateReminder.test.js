import {
    connect,
    closeDatabase,
    clearDatabase,
} from "../../db-handler.js";

import { createUser } from "../../../services/users/users.service.js";
import { newReminder } from "../../../services/reminders/reminders.service.js";

let userId;

describe('create reminder', () => {
    //Connect
    beforeAll(async () => await connect());

    //Create an account
    beforeEach(done => {
        createUser({username: 'Test', password: 'password'})
        .then(res => {
            userId = res._id;
            done();
        })
    })

    //Clear database
    afterEach(async () => await clearDatabase());

    //Close database
    afterAll(async () => await closeDatabase());

    test('this should create a reminder', done => {
        const data = {
            body: 'this is a reminder',
            time: "2021-01-26T13:51:50.417-07:00"
        }

        newReminder(userId, data)
            .then(res => {
                expect(res).toHaveProperty('_id');
                expect(res).toHaveProperty('user');
                expect(res).toHaveProperty('body');
                expect(res).toHaveProperty('time');
                done();
            })
            .catch(error => done(error))
    });
});