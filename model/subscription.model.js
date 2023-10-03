// import sequelize
const { Sequelize, DataTypes } = require('sequelize');

// import db config
const sequelize = require('../config/db_config');

// create model
const Subscription = sequelize.define (
    'subscription',
    {
        id_subscription: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        email: {
            type: DataTypes.STRING,
        },
        joined_at: {
            type: DataTypes.DATE,
            defaultValue: Sequelize.NOW,
        },
    }
);

// create table if not exists
(async () => {
    await sequelize.sync();
})();

// export model
module.exports = Subscription;