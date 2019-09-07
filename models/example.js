

module.exports = function(sequelize, DataTypes) {
  var main = sequelize.define("main", {
    description: DataTypes.TEXT,
    played: {
      type: DataTypes.BOOLEAN,
      defaultValue: false}
  });
  return main;
}

module.exports = function(sequelize, DataTypes) {
  var play = sequelize.define("play", {
    description: DataTypes.TEXT,
    played: {
      type: DataTypes.BOOLEAN,
      defaultValue: false}
  });
  return play;
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