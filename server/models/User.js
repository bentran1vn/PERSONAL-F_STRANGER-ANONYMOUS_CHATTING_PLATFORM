import { DataTypes } from 'sequelize'

import SQLModel from '../common/SQLModel.js'
import sequelize from '../database/database.js'

const tableName = 'users'

const User = sequelize.define(tableName, {
    ...SQLModel,
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
})

User.sync().then(() => {
    console.log(`${tableName} table is Ready!`)
})

export default User
