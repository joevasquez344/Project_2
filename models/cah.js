module.exports = function(sequelize, DataTypes) {
  var questionCards= sequelize.define("question_cards", {
    description: DataTypes.TEXT,
    played: {
      type: DataTypes.BOOLEAN,
      defaultValue: false}
  });
  return questionCards;
}

module.exports = function(sequelize, DataTypes) {
  var responseCards = sequelize.define("response_cards", {
    description: DataTypes.TEXT,
    played: {
      type: DataTypes.BOOLEAN,
      defaultValue: false}
  });
  return responseCards;
}

module.exports = function(sequelize, DataTypes) {
  var players = sequelize.define("players", {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    points: {
      type: DataTypes.INTEGER,
    defaultValue: 0}
  });
  return players;
}


