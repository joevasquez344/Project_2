module.exports = function(sequelize, DataTypes) {
    var responseCards = sequelize.define("response_cards", {
      description: DataTypes.TEXT,
      played: {
        type: DataTypes.BOOLEAN,
        defaultValue: false}
    });
    return responseCards;
  }