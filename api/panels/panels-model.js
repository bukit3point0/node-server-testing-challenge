const db = require('../../data/dbConfig')

const findAll = () => {
    return db('panels')
}

async function findBy(filter) {
    return db('panels')
    .where(filter)
    .orderBy('panel_id')
}

async function findById(panel_id) {

    const panel = await db('panels as p')
    .leftJoin('creator_panels as crp', 'p.panel_id', 'crp.panel_id')
    .leftJoin('creators as c', 'crp.creator_id', 'c.creator_id')
    .leftJoin('moderators as m', 'p.panel_id', 'm.panel_id')
    .leftJoin('creators as cr', 'm.creator_id', 'cr.creator_id')
    .select('p.*', 'c.creator_name as panelist', 'cr.creator_name as moderator')
    .where('p.panel_id', panel_id)
    
    const addPanelists = panel.reduce((acc, step) => {
        const {panelist} = step
        if(acc[step.panel_id]) {
            acc[step.panel_id].panelists.push(panelist)
        } else {
            if (panelist === null) {
                acc[step.panel_id] = {
                    panel_id: step.panel_id,
                    panel_name: step.panel_name,
                    panel_description: step.panel_description,
                    panel_time: step.time,
                    panel_date: step.date,
                    moderator: step.moderator,
                    panelists: []
                }
            } else {
                acc[step.panel_id] = {
                    panel_id: step.panel_id,
                    panel_name: step.panel_name,
                    panel_description: step.panel_description,
                    panel_time: step.time,
                    panel_date: step.date,
                    moderator: step.moderator,
                    panelists: [panelist]
                }
            }
        }
        return acc
    }, {})

    return addPanelists
}

async function addPanel(panel) {
    const [panel_id] = await db('panels').insert(panel, 'panel_id')
    return db('panels').where({panel_id}).first()
}

function remove(panel_id) {
    return db('panels')
    .where({panel_id})
    .del()
}

module.exports = {
    findAll,
    findBy,
    findById,
    addPanel,
    remove
}