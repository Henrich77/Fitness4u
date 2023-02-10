const User = require('./User');
const Workout = require('./Workout');
const Plan = require('./Plan');

Plan.belongsTo(User, {
    foreignKey: 'user_id'
});

Plan.hasMany(Workout, {
    foreignKey: 'plan_id',
    onDelete: 'CASCADE'
});

Workout.belongsTo(User, {
    foreignKey: 'user_id'
});


module.exports = { 
    User,
    Workout,
    Plan,
 };