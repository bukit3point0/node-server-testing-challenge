const db = require('../../data/dbConfig')
const request = require('supertest')
const server = require('../server')

beforeAll(async () => {
    await db.migrate.rollback()
    await db.migrate.latest()
})
beforeEach(async() => {
    await db('creators').truncate()
})
afterAll(async () => {
    await db.destroy()
})

describe(`[GET]'/api/creators/'`, () => {
    beforeEach(async () => {
        await db('creators').insert([
            {creator_name: "Christopher Golden"},
            {creator_name: "James A. Moore"},
            {creator_name: "R. L. Stine"}
        ])
    })

    it('returns creators list', async () => {
        const response = await request(server).get('/api/creators')
        expect(response.status).toBe(200)
        expect(response.body).toMatchObject([
            {
              creator_id: 1,
              creator_name: 'Christopher Golden',
              creator_stage_name: null,
              creator_company_name: null,
              email_address: null
            },
            {
              creator_id: 2,
              creator_name: 'James A. Moore',
              creator_stage_name: null,
              creator_company_name: null,
              email_address: null
            },
            {
              creator_id: 3,
              creator_name: 'R. L. Stine',
              creator_stage_name: null,
              creator_company_name: null,
              email_address: null
            }
          ])
    })

    it('lists the correct number of creators', async () => {
        const response = await request(server).get('/api/creators')
        expect(response.body).toHaveLength(3)
    })
})

describe(`[POST]'/api/creators/'`, () => {
    describe('[POST] creates successfully', () => {
        it('returns the new creator', async () => {
            let postCreator = await request(server)
                .post('/api/creators')
                .send({creator_name: "Christopher Golden"})
            expect(postCreator.body).toMatchObject({
                creator_id: 1,
                creator_name: 'Christopher Golden',
                creator_stage_name: null,
                creator_company_name: null,
                email_address: null
              })
            postCreator = await request(server)
                .post('/api/creators')
                .send({creator_name: "James A. Moore"})
                expect(postCreator.body).toMatchObject({
                    creator_id: 2,
                    creator_name: 'James A. Moore',
                    creator_stage_name: null,
                    creator_company_name: null,
                    email_address: null
                  })
        })

        it('adds creator to the database', async () => {
            await request(server).post('/api/creators')
                .send({creator_name: "Christopher Golden"})
            let creators = await db('creators')
            expect(creators).toHaveLength(1)
            await request(server).post('/api/creators')
                .send({creator_name: "James A. Moore"})
            creators = await db('creators')
            expect(creators).toHaveLength(2)
        })
    })

    describe(`[POST] doesn't submit`, () => {
        it.todo(`requires a creator name`)
        
        it('requires a unique creator name', async () => {
            await request(server).post('/api/creators').send({creator_name: "Christopher Golden"})
            let postCreator = await request(server).post('/api/creators').send({creator_name: "Christopher Golden"})
            expect(postCreator.status).toBe(422)
        })
    })
})

describe(`[DELETE] 'api/creators/:creator_id`, () => {
    beforeEach(async () => {
        await db('creators').insert([
            {creator_name: "Christopher Golden"},
            {creator_name: "James A. Moore"},
            {creator_name: "R. L. Stine"}
        ])
    })

    describe(`[DELETE] removes successfully`, () => {
        it('deletes the creator', async () => {
            await request(server).delete('/api/creators/2')
            let creators = await db('creators')
            expect(creators[1]).toMatchObject({
                creator_id: 3,
                creator_name: 'R. L. Stine',
                creator_stage_name: null,
                creator_company_name: null,
                email_address: null
            })
            expect(creators).toHaveLength(2)
        })
    })

    describe(`[DELETE] requires proper creator id to delete`, () => {
        it(`requires an id number`, async () => {
            let noId = await request(server).delete('/api/creators')
            expect(noId.status).toBe(404)
        })

        it(`retains all panels if no or invalid id`, async () => {
            await request(server).delete('/api/creators')
            const creators = await db('creators')
            expect(creators).toHaveLength(3)
            await request(server).delete('/api/creators/4')
            expect(creators).toHaveLength(3)
        })
    })

})