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
        it(`displays proper panel by id`, async () => {
            let findPanel = await Panels.findById(1)
            expect(findPanel).toMatchObject({
                "1": {
                    panel_id: 1,
                    panel_name: "Horrorific Beasts",
                    panel_description: null,
                    panel_time: "5P",
                    panel_date: "November 1",
                    moderator: null,
                    panelists: []
                }
            })
            findPanel = await Panels.findById(2)
            expect(findPanel).toMatchObject({
                "2": {
                    panel_id: 2,
                    panel_name: "Horror in Four Colors: Horror Comics",
                    panel_description: null,
                    panel_time: "6P",
                    panel_date: "November 1",
                    moderator: null,
                    panelists: []
                }
            })
        })

        it(`displays proper response when no panel_id found`, async () => {
            let findPanel = await Panels.findById(3)
            expect(findPanel).toMatchObject({})
        })
    })
    
    describe(`addPanel()`, () => {
        beforeEach(async () => {
            await db('panels').insert(
                {
                    panel_name: "Horrorific Beasts",
                    time: "5P",
                    date: "November 1"
                }
            )
        })
        it(`adds panel`, async () => {
            Panels.addPanel(
                {
                    panel_name: "Horror in Four Colors: Horror Comics",
                    time: "6P",
                    date: "November 1"
                }
            )
            let panelArray = await db('panels')
            expect(panelArray).toHaveLength(2)
            expect(panelArray[1]).toMatchObject({
                panel_name: "Horror in Four Colors: Horror Comics",
                time: "6P",
                date: "November 1"
            })
        })

        it(`resolves to correct shape`, async () => {
            Panels.addPanel(
                {
                    panel_name: "Horror in Four Colors: Horror Comics",
                    time: "6P",
                    date: "November 1"
                }
            )
            let panelArray = await db('panels')
            expect(panelArray).toHaveLength(2)
            expect(panelArray).toMatchObject([
                {
                    panel_id: 1,
                    panel_name: "Horrorific Beasts",
                    panel_description: null,
                    time: "5P",
                    date: "November 1"
                },
                {
                    panel_id: 2,
                    panel_name: "Horror in Four Colors: Horror Comics",
                    panel_description: null,
                    time: "6P",
                    date: "November 1"
                }
            ])
        })
    })
    
    describe(`remove()`, () => {
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
        it(`removes the panel successfully`, async () => {
            await Panels.remove(1)
            let panelArray = await db('panels')
            expect(panelArray).toHaveLength(1)
        })

        it(`displays proper response when no panel can be deleted`, async () => {
            await Panels.remove(3)
            let panelArray = await db('panels')
            expect(panelArray).toHaveLength(2)
        })
    })
})