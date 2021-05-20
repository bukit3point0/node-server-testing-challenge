const db = require('../../data/dbConfig')
const request = require('supertest')
const server = require('../server')

beforeAll(async () => {
    await db.migrate.rollback()
    await db.migrate.latest()
})
beforeEach(async() => {
    await db('panels').truncate()
})
afterAll(async () => {
    await db.destroy()
})

describe(`[GET]'/api/panels/'`, () => {
    beforeEach(async () => {
        await db('panels').insert([
            {
                panel_name: "Horrorific Beasts",
                time: "5P",
                date: "November 1"
              },
              {
                panel_name: "Horror in Four Colors: Horror Comics",
                time: "6P",
                date: "November 1"
              }
        ])
    })

    it('returns panels list', async () => {
        const response = await request(server).get('/api/panels')
        expect(response.status).toBe(200)
        console.log(response.body)
        expect(response.body).toMatchObject([
            {
                panel_name: "Horrorific Beasts",
                time: "5P",
                date: "November 1"
            },
            {
                panel_name: "Horror in Four Colors: Horror Comics",
                time: "6P",
                date: "November 1"
            }
        ])
    })

    it('lists the correct number of panels', async () => {
        const response = await request(server).get('/api/panels')
        expect(response.body).toHaveLength(2)
    })
})