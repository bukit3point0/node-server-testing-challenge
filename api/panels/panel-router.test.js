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

describe(`[POST] 'api/panels/'`, () => {

    describe('[POST] creates successfully', () => {
        it('returns the created panel data', async () => {
            let postPanel = await request(server)
                .post('/api/panels')
                .send({
                    panel_name: "Horrorific Beasts",
                    time: "5P",
                    date: "November 1"
                })
            expect(postPanel.body).toMatchObject({
                panel_name: "Horrorific Beasts",
                time: "5P",
                date: "November 1"
            })

            postPanel = await request(server)
            .post('/api/panels')
            .send({
                panel_name: "Horror in Four Colors: Horror Comics",
                    time: "6P",
                    date: "November 1"
            })
            expect(postPanel.body).toMatchObject({
                panel_name: "Horror in Four Colors: Horror Comics",
                time: "6P",
                date: "November 1"
            })
        })
        
        it('creates a new panel in the database', async () => {
            await request(server).post('/api/panels').send({
                panel_name: "Horrorific Beasts",
                time: "5P",
                date: "November 1"
            })
            let panels = await db('panels')
            expect(panels).toHaveLength(1)
            await request(server).post('/api/panels').send({
                panel_name: "Horror in Four Colors: Horror Comics",
                time: "6P",
                date: "November 1"
            })
            panels = await db('panels')
            expect(panels).toHaveLength(2)
        })
    })

    describe(`[POST] doesn't submit`, () => {
        it(`doesn't permit only a panel name`, async () => {
            let postPanel = await request(server)
                .post('/api/panels')
                .send({panel_name: "Horrorific Beasts"})
            expect(postPanel.status).toBe(500)
        })
        
        it(`will not repeat a panel name`, async () => {
            await request(server)
                .post('/api/panels')
                .send({
                    panel_name: "Horrorific Beasts",
                    time: "5P",
                    date: "November 1"
                })
            let postPanel = await request(server)
                .post('/api/panels')
                .send({
                    panel_name: "Horrorific Beasts",
                    time: "5P",
                    date: "November 1"
                })
            expect(postPanel.status).toBe(422)
        })
    })
 
})

describe(`[DELETE] 'api/panels/:panel_id'`, () => {

})