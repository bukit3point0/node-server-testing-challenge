const Panels = require('./panels-model')

const checkId = (req, res, next) => {
    const id = req.params.panel_id
    Panels.findById(id)
    .then(panel => {
        if (!panel) {
            res.status(404).json({
                message: `Panel doesn't exist`
            })
        } else {
            next()
        }
    })
    .catch(err => {
        res.status(500).json({
            message: err.message
        })
    })
}

const confirmNewPanel = (req, res, next) => {
    const {panel_name} = req.body

    // const date = Panels.findBy({date})
    // const time = Panels.findBy({time})

    Panels.findBy({panel_name})
    .then(([panel]) => {
        console.log(panel)
        if(panel) {
            res.status(422).json({
                message: `Panel name ${panel_name} already exists`
            })
        } else {
            next()
        }
    })
}

module.exports = {
    checkId,
    confirmNewPanel
}