import {
    connect,
    closeDatabase,
    clearDatabase,
} from "../../db-handler.js";

import { loginUser } from "../../../services/users/users.service.js";

describe('login', () => {
    //Connect
    beforeAll(async () => await connect());

    //Clear database
    afterEach(async () => await clearDatabase());

    //Close database
    afterAll(async () => await closeDatabase());

    test('this should log the user in', done => {
        const username = 'John';

        loginUser(username)
            .then(res => {
                expect(res).toBe(null);
                done();
            })
            .catch(error => done(error))
    });
});