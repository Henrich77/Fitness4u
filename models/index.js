const User = require('./User');
const Workout = require('./Workout');
const Plan = require('./Plan');

User.hasMany(Plan, {
    foreignKey: 'user_id'
});

Plan.belongsTo(User, {
    foreignKey: 'user_id'
});

Plan.hasMany(Workout, {
    foreignKey: 'plan_id',
    onDelete: 'CASCADE'
});

Workout.belongsTo(Plan, {
    foreignKey: 'plan_id'
});


module.exports = { 
    User,
    Workout,
    Plan,
 };