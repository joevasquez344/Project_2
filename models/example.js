module.exports = function(sequelize, DataTypes) {
  var Example = sequelize.define("Example", {
    text: DataTypes.STRING,
    description: DataTypes.TEXT
  });
  return Example;
  
};

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