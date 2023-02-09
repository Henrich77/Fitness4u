const User = require('./User');
const Workout = require('./Workout');

Region.hasMany(Workout, {
    foreignKey: 'region_id',
});

Workout.belongsTo(Region, {
    foreignKey: 'region_id',
});

module.exports = { 
    User,
    Workout,
 };