module.exports = (sequelize, DataTypes) => {
   const Post = sequelize.define("Post", {
     name: {
       type: DataTypes.STRING,
       allowNull: false,
     },
     description: {
       type: DataTypes.STRING,
       allowNull: false,
     },
     image: {
       type: DataTypes.STRING,
       allowNull: true,
     },
     price: {
       type: DataTypes.DECIMAL(10, 2),
       allowNull: false,
     },
   });
 
   return Post;
 };
 