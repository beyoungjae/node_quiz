const Sequelize = require('sequelize')

module.exports = class Author extends Sequelize.Model {
   static init(sequelize) {
      return super.init(
         {
            name: {
               type: Sequelize.STRING(100),
               allowNull: false,
            },
            age: {
               type: Sequelize.INTEGER,
               allowNull: true,
            },
         },
         {
            sequelize,
            timestamps: false,
            underscored: false,
            modelName: 'Author',
            tableName: 'Authors',
            paranoid: false,
            charset: 'utf8mb4',
            collate: 'utf8mb4_general_ci',
         }
      )
   }

   static associate(db) {
      db.Author.hasMany(db.Book, {
         foreignkey: 'AuthorId',
         sourcekey: 'id',
      })
   }
}
