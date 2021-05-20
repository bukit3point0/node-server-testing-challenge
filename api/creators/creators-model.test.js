const db = require('../../data/dbConfig')
const Creators = require('./creators-model')

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

describe('Creators', () => {
    
    describe ('sanity check', () => {
    
        test('Creators are defined', () => {
            expect(Creators).toBeDefined()
        })

        test('DB_ENV exists', () => {
            expect(process.env.DB_ENV).toBe('testing')
        })
    
    })

    describe(`findAll()`, () => {
        it(`displays creators`, async () => {
            let allCreators = await Creators.findAll()
            expect(allCreators).toEqual([])
            expect(allCreators).toHaveLength(0)
            await db('creators').insert({creator_name: "Christopher Golden"})
            allCreators = await Creators.findAll()
            expect(allCreators).toHaveLength(1)
        })
        it(`resolves to correct shape`, async () => {
            await db('creators').insert({creator_name: "Christopher Golden"})
            let allCreators = await Creators.findAll()
            expect(allCreators).toMatchObject([{creator_name: "Christopher Golden"}])
        })
    })

    describe(`findBy()`, () => {
        beforeEach(async () => {
            await db('creators').insert([
                {creator_name: "Christopher Golden"}, 
                {creator_name: "James A. Moore"}
            ])
        })
        it(`displays proper creator by name`, async () => {
            const creator_name = "Christopher Golden"
            let findCreator = await Creators.findBy({creator_name})
            expect(findCreator).toMatchObject([{
                creator_id: 1,
                creator_name: 'Christopher Golden',
                creator_stage_name: null,
                creator_company_name: null,
                email_address: null
            }])
        })

        it(`displays proper array for no creator_name found`, async () => {
            const creator_name = "Anon"
            let findCreator = await Creators.findBy({creator_name})
            expect(findCreator).toHaveLength(0)
        })
    })
    
    describe(`findById()`, () => {
        beforeEach(async () => {
            await db('creators').insert([
                {creator_name: "Christopher Golden"}, 
                {creator_name: "James A. Moore"}
            ])
        })
        it(`displays proper creator by id`, async () => {
            let findCreator = await Creators.findById(1)
            expect(findCreator).toMatchObject({
                '1': {
                  creator_id: 1,
                  creator_name: 'Christopher Golden',
                  creator_stage_name: null,
                  creator_company_name: null,
                  email_address: null,
                  panels: [],
                  moderating: [ null ]
                }
              })
            findCreator = await Creators.findById(2)
            expect(findCreator).toMatchObject({
                "2": {
                    creator_id: 2,
                    creator_name: 'James A. Moore',
                    creator_stage_name: null,
                    creator_company_name: null,
                    email_address: null,
                    panels: [],
                    moderating: [ null ]
                  }
            })
        })

        it(`displays proper response when no creator_id found`, async () => {
            let findCreator = await Creators.findById(3)
            expect(findCreator).toMatchObject({})
        })
    })
    
    describe(`addCreator()`, () => {
        beforeEach(async () => {
            await db('creators').insert([{creator_name: "Christopher Golden"}])
        })
        it(`adds creator`, async () => {
            Creators.addCreator({creator_name: "James A. Moore"})
            let creatorArray = await db('creators')
            expect(creatorArray).toHaveLength(2)
            expect(creatorArray[1]).toMatchObject({
                "creator_id": 2,
                "creator_name": "James A. Moore",
                "creator_stage_name": null,
                "creator_company_name": null,
                "email_address": null
            })
        })

        it(`resolves to correct shape`, async () => {
            Creators.addCreator({creator_name: "James A. Moore"})
            let creatorArray = await db('creators')
            expect(creatorArray).toHaveLength(2)
            expect(creatorArray).toMatchObject([
                {
                    "creator_id": 1,
                    "creator_name": "Christopher Golden",
                    "creator_stage_name": null,
                    "creator_company_name": null,
                    "email_address": null
                },
                {
                    "creator_id": 2,
                    "creator_name": "James A. Moore",
                    "creator_stage_name": null,
                    "creator_company_name": null,
                    "email_address": null
                }
            ])
        })
    })
    
    describe(`remove()`, () => {
        beforeEach(async () => {
            await db('creators').insert([
                {creator_name: "Christopher Golden"}, 
                {creator_name: "James A. Moore"}
            ])
        })
        it(`removes the creator successfully`, async () => {
            await Creators.remove(1)
            let creatorArray = await db('creators')
            expect(creatorArray).toHaveLength(1)
        })

        it(`displays proper response when no creator can be deleted`, async () => {
            await Creators.remove(3)
            let creatorArray = await db('creators')
            expect(creatorArray).toHaveLength(2)
        })
    })
})