module.exports = (sequelize, DataTypes) => {
  const Travel = sequelize.define('Travel', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },

    city_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    city_review: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    
    hotel_name: {
      type: DataTypes.STRING,
    },

    hotel_review: {
      type: DataTypes.TEXT,
    }, 
  }, {
    sequelize,
    validate: {
      nameAndReview() {
        if ((this.hotel_name === null) !== (this.hotel_review === null)) {
          throw new Error('Enter in a hotel name and a hotel review!');
        }
      }
    }
  });

  // Travel.associate = (models) => {
  //   Travel.belongsTo(models.User, {
  //     foreignKey: {
  //       allowNull: false,
  //     },
  //   });
  // };
  return Travel;
}
