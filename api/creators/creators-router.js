const router = require('express').Router()
const {checkId, confirmNewCreator} = require('./creators-middleware')
const Creators = require('./creators-model')

// [GET] /api/creators/
router.get('/', (req, res, next) => {
    Creators.findAll()
    .then(creators => {
        res.json(creators)
    })
    .catch(next)
})

// [GET] /api/creators/:creator_id
router.get('/:creator_id', checkId, (req, res, next) => {
    const {creator_id} = req.params

    Creators.findById(creator_id)
    .then(creator => {
        res.json(creator)
    })
    .catch(next)
})

// [POST] api/creators/
router.post('/', confirmNewCreator, (req, res, next) => {
    Creators.addCreator(req.body)
    .then(creator => {
        res.status(201).json(creator)
    })
    .catch(next)
})

// [DELETE] api/creators/:creator_id
router.delete('/:creator_id', checkId, (req, res, next) => {
    Creators.remove(req.params.creator_id)
    .then(() => {
        res.status(200).json({
            message: `Creator removed. No more panels for you!`
        })
    })
})

module.exports = router