const express = require('express')
const { Book, Author } = require('../models')

const router = express.Router()

// GET /books
router
   .route('/')
   .get(async (req, res, next) => {
      try {
         const books = await Book.findAll({ include: Author })
         res.status(200).json(books)
      } catch (error) {
         console.log(error)
         next(error)
      }
   })

   // POST /books
   .post(async (req, res, next) => {
      try {
         // req.body : 모든 컬럼(원하는 컬럼들에) 자유롭게 insert 가능
         const book = await Book.create(req.body)
         console.log(book)
         res.status(201).json(book)
      } catch (error) {
         console.error(error)
         next(error)
      }
   })

// PATCH /books/책 :id
router
   .route('/:id')
   .patch(async (req, res, next) => {
      try {
         const result = await Book.update(req.body, {
            where: { id: req.params.id },
         })
         if (result[0] === 0) {
            return res.status(404).json({ message: '책을 찾을 수 없습니다.' })
         }

         res.json({ message: '책 정보가 수정되었습니다', result })
      } catch (error) {
         console.error(error)
         next(error)
      }
   })

   // DELETE /books/책 :id
   .delete(async (req, res, next) => {
      try {
         const result = await Book.destroy({
            where: { id: req.params.id },
         })
         if (result === 0) {
            return res.status(404).json({ message: '책을 찾을 수 없습니다.' })
         }
         res.json({ message: '책 정보가 삭제되었습니다.', result })
      } catch (error) {
         console.error(error)
         next(error)
      }
   })

module.exports = router
