const Sequelize = require('sequelize')
const User = require('./user')
const Profile = require('./profile')

const Author = require('./author')
const Book = require('./book')

const dotenv = require('dotenv')

// .env에서 현재 실행환경을 가져옴
const env = process.env.NODE_ENV || 'development'

// 가져온 실행환경에 맞는 db 설정을 가져옴
const config = require('../config/config')[env]
const db = {}
dotenv.config()

// sequelize를 사용해서 데이터베이스 연결 객체 생성
const sequelize = new Sequelize(config.database, config.username, config.password, config)

// db객체를 생성하여 sequelize 객체와 모든 모델들을 저장
db.sequelize = sequelize

// User 모델과 Profile 모델을 db 객체에 추가
db.User = User
db.Profile = Profile

db.Author = Author
db.Book = Book

// 모델을 초기화하고 데이터베이스와 연결
User.init(sequelize)
Profile.init(sequelize)

Author.init(sequelize)
Book.init(sequelize)

// 모델간에 관계 설정 (예- 외래키, 연관 테이블 등)
User.associate(db)
Profile.associate(db)

Author.associate(db)
Book.associate(db)

// db객체를 모듈로 내보냄
module.exports = db
