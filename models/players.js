module.exports = function(sequelize, DataTypes) {
    var players = sequelize.define("players", {
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      email: DataTypes.STRING,
      points: {
        type: DataTypes.INTEGER,
      defaultValue: 0}
    });
    return players;
  }