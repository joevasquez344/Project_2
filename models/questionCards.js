module.exports = function(sequelize, DataTypes) {
  var questionCards = sequelize.define("question_cards", {
    description: DataTypes.TEXT,
    played: {
      type: DataTypes.BOOLEAN,
      defaultValue: false}
  });
  return questionCards;
}