import { get } from 'http'
import { suite, setup, test } from 'mocha'
import { equal } from 'assert'

suite(`webrew cli`, () => {
    setup(() => {

    })
    test(`Server should repond with 200`, () => {
        get(`http://localhost:8080`, (res) => {
            equal(res.statusCode, 200)
        })
    })
})