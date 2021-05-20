const db = require('../../data/dbConfig')
const Panels = require('./panels-model')

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

describe('Panels', () => {
    
    describe ('sanity check', () => {
    
        test('Panels are defined', () => {
            expect(Panels).toBeDefined()
        })

        test('DB_ENV exists', () => {
            expect(process.env.DB_ENV).toBe('testing')
        })
    
    })

    describe(`findAll()`, () => {
        it(`displays panels`, async () => {
            let allPanels = await Panels.findAll()
            expect(allPanels).toEqual([])
            expect(allPanels).toHaveLength(0)
            await db('panels').insert({
                panel_name: "Horrorific Beasts",
                time: "5P",
                date: "November 1"
            })
            allPanels = await Panels.findAll()
            expect(allPanels).toHaveLength(1)
        })

        it(`resolves to correct shape`, async () => {
            await db('panels').insert({
                panel_name: "Horrorific Beasts",
                time: "5P",
                date: "November 1"
            })
            let allPanels = await Panels.findAll()
            expect(allPanels).toMatchObject([{
                panel_name: "Horrorific Beasts",
                time: "5P",
                date: "November 1"
            }])
        })
    })
    
    describe(`findBy()`, () => {
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
        it(`displays proper panel by name`, async () => {
            const panel_name = "Horrorific Beasts"
            const findPanel = await Panels.findBy({panel_name})
            expect(findPanel).toMatchObject([{
                panel_name: "Horrorific Beasts",
                time: "5P",
                date: "November 1"
            }])
        })
        it(`displays proper array for no panel_name found`, async () => {
            const panel_name = "Funky Fun Time"
            const findPanel = await Panels.findBy({panel_name})
            expect(findPanel).toHaveLength(0)
        })
    })
    
    describe(`findById()`, () => {
        it.todo(`displays proper panel by id`)
        it.todo(`displays proper response when no panel_id found`)
    })
    
    describe(`addPanel()`, () => {
        it.todo(`adds panel`)
        it.todo(`resolves to correct shape`)
    })
    
    describe(`remove()`, () => {
        it.todo(`removes the panel successfully`)
        it.todo(`displays proper response when no panel can be deleted`)
    })
})