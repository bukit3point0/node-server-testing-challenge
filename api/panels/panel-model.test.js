const { text } = require('express')
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
})