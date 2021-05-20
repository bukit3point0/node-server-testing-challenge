const Creators = require('./creators-model')

const checkId = (req, res, next) => {
    const id = req.params.creator_id
    Creators.findById(id)
    .then(creator => {
        if (!creator) {
            res.status(404).json({
                message: `Creator doesn't exist`
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

const confirmNewCreator = (req, res, next) => {
    const creator_name = req.body.creator_name

    Creators.findBy({creator_name})
    .then(([creator]) => {
        console.log(creator)
        if(creator) {
            res.status(422).json({
                message: `Creator ${creator_name} already exists`
            })
        } else {
            next()
        }
    })
}

module.exports = {
    checkId,
    confirmNewCreator
}