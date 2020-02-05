module.exports = function(sequelize, DataTypes) {
    var Testimonials = sequelize.define("Testimonials", {
        firstName: DataTypes.STRING, 
        body: DataTypes.TEXT
    });
    return Testimonials;
};