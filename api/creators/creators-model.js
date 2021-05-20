const db = require('../../data/dbConfig')

const findAll = () => {
    return db('creators')
}

async function findBy(filter) {
    return db('creators')
    .where(filter)
    .orderBy('creator_id')
}

async function findById(creator_id) {
    const creator = await db('creators as c')
    .leftJoin('creator_panels as crp', 'c.creator_id', 'crp.creator_id')
    .leftJoin('panels as p', 'crp.panel_id', 'p.panel_id')
    .select(
        'c.*',
        'p.panel_name'      
    )
    .where('c.creator_id', creator_id)

    const moderator = await db('creators as c')
    .leftJoin('moderators as m', 'c.creator_id', 'm.creator_id')
    .leftJoin('panels as p', 'm.panel_id', 'p.panel_id')
    .select('p.panel_name')
    .where('c.creator_id', creator_id)

    const modPanels = []
    moderator.forEach(panel => {
        modPanels.push(panel.panel_name)
    })

    const creatorPanels = creator.reduce((acc, step) => {
        const {panel_name} = step
        if (acc[step.creator_id]) {
                acc[step.creator_id].panels.push(panel_name)
        } else {
            if (panel_name === null) {
                acc[step.creator_id] = {
                    creator_id: step.creator_id,
                    creator_name: step.creator_name,
                    creator_stage_name: step.creator_stage_name,
                    creator_company_name: step.creator_company_name,
                    email_address: step.email_address,
                    panels: [],
                    moderating: modPanels
                }
            } else {
                acc[step.creator_id] = {
                    creator_id: step.creator_id,
                    creator_name: step.creator_name,
                    creator_stage_name: step.creator_stage_name,
                    creator_company_name: step.creator_company_name,
                    email_address: step.email_address,
                    panels: [panel_name],
                    moderating: modPanels
                }
            } 
        }

        return acc
        
    }, {})

    return creatorPanels
}

async function addCreator(creator) {
    const [creator_id] = await db('creators').insert(creator, 'creator_id')
    return db('creators').where({creator_id}).first()
}

function remove(creator_id) {
    return db('creators')
    .where({creator_id})
    .del()
}

module.exports = {
    findAll,
    findBy,
    findById,
    addCreator,
    remove
}