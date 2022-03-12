import {
    connect,
    closeDatabase,
    clearDatabase,
} from "../../db-handler.js";

import { createUser } from "../../../services/users/users.service.js";

describe('create an account', () => {
    //Connect
    beforeAll(async () => await connect());

    //Clear database
    afterEach(async () => await clearDatabase());

    //Close database
    afterAll(async () => await closeDatabase());

    test('this should create an account for a user', done => {
        createUser({ username: 'John', password: 'password' })
            .then(res => {
                expect(res).toHaveProperty('username');
                expect(res).toHaveProperty('password');
                done();
            })
            .catch(error => done(error))
    });
});