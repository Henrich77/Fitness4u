const User = require('./User');
const Workout = require('./Workout');
const Component = require('./Component')
const Body = require('./Body')
const Plan = require('./Plan')

Workout.belongsTo(Body, {
    foreignKey: 'body_id'
});

Body.hasMany(Workout, {
    foreignKey: 'body_id',
    onDelete: 'CASCADE'
});

module.exports = { 
    User,
    Workout,
    Body,
    Component,
    Plan,
 };