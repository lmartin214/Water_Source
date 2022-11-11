// import important parts of sequelize library
const { Model, DataTypes } = require("sequelize");
// import our database connection from config.js
const sequelize = require("../config/connection");

// Initialize post model (table) by extending off Sequelize's Model class
class Post extends Model {}

// set up fields and rules for Post model
Post.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      comments: "",
    },
    zip: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    closestAddress: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    movingOrStill: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      comments: "",
    },

    // distance: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },

    // source: {
    //   type: DataTypes.STRING,
    //   allowNull: true,
    //   comments: "",
    // },
    // tested: {
    //   type: DataTypes.BOOLEAN,
    //   allowNull: false,
    //   comments: "",
    // },
    // drinkable: {
    //   type: DataTypes.BOOLEAN,
    //   allowNull: true,
    //   comments: "",
    // },
    // visibility: {
    //   type: DataTypes.BOOLEAN,
    //   allowNull: false,
    //   comments: "",
    // },
    // depth: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   comments: "",
    // },
    // swimmable: {
    //   type: DataTypes.BOOLEAN,
    //   allowNull: true,
    //   comments: "",
    // },
    // accessibility: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   comments: "",
    // },
    // isHike: {
    //   type: DataTypes.BOOLEAN,
    //   allowNull: true,
    //   comments: "",
    // },
    // isDrive: {
    //   type: DataTypes.BOOLEAN,
    //   allowNull: true,
    //   comments: "",
    // },
    // parking: {
    //   type: DataTypes.BOOLEAN,
    //   allowNull: false,
    //   comments: "",
    // },
    // dogs: {
    //   type: DataTypes.STRING,
    //   allowNull: true,
    //   comments: "",
    // },
    // additionalComments: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
  },

  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "Post",
  }
);

module.exports = Post;
