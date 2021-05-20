const router = require('express').Router()
const {checkId, confirmNewPanel, addCreator} = require('./panels-middleware')
const Panels = require('./panels-model')

// [GET] /api/panels/
router.get('/', (req, res, next) => {
    Panels.findAll()
    .then(panels => {
        res.json(panels)
    })
    .catch(next)
})

// [GET] /api/panels/:panel_id
router.get('/:panel_id', checkId, (req, res, next) => {
    const {panel_id} = req.params

    Panels.findById(panel_id)
    .then(panel => {
        res.json(panel)
    })
    .catch(next)
})

// [POST] api/panels/
router.post('/', confirmNewPanel, (req, res, next) => {
    Panels.addPanel(req.body)
    .then(panel => {
        res.status(201).json(panel)
    })
    .catch(next)
})

// [DELETE] api/panels/:panel_id
router.delete('/:panel_id', checkId, (req, res, next) => {
    Panels.remove(req.params.panel_id)
    .then(() => {
        res.status(200).json({
            message: `Panel dead :(`
        })
    })
})

module.exports = router