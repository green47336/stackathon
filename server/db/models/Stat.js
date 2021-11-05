const Sequelize = require ('sequelize')
const db = require('../db')

const {UUID, UUIDV4, STRING, INTEGER} = Sequelize

const Stat = db.define('stat', {
    id: {
        type: UUID,
        defaultValue: UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: STRING,
        allowNull: false
    },
    playCount: {
        type: INTEGER,
        defaultValue: 0
    }
})

module.exports = Stat