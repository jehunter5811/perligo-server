const member = require("./member");

module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    id: {
      allowNull: false,
      primaryKey: false,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    email: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING,
    },
    firstName: {
      type: DataTypes.STRING, 
      allowNull: false
    }, 
    lastName: {
      type: DataTypes.STRING, 
      allowNull: false
    }, 
    avatar: {
      type: DataTypes.STRING, 
      allowNull: true
    },
    passwordHash: DataTypes.STRING, 
    emailVerified: {
      type: DataTypes.BOOLEAN, 
      allowNull: false, 
      defaultValue: false
    }
  });

  user.associate = function (models) {
    // associations can be defined here
    user.hasMany(models.member, {foreignKey: 'member', sourceKey: 'id'});
  };

  return user;
}