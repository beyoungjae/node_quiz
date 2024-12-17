const Sequelize = require('sequelize')

module.exports = class User extends Sequelize.Model {
   static init(sequelize) {
      return super.init(
         {
            // username컬럼 정의
            username: {
               type: Sequelize.STRING(50),
               allowNull: false,
            },
            // email컬럼 정의
            email: {
               type: Sequelize.STRING(100),
               allowNull: false,
            },
         },
         {
            sequelize,
            timestamps: false,
            underscored: false,
            modelName: 'User',
            tableName: 'users',
            paranoid: false,
            charset: 'utf8mb4',
            collate: 'utf8mb4_general_ci',
         }
      )
   }

   static associate(db) {
      db.User.hasMany(db.Profile, {
         foreignkey: 'profiler',
         sourcekey: 'id',
      })
   }
}
