const express = require('express')
const { Book, Author } = require('../models')

const router = express.Router()

router.get('/:id/books', async (req, res, next) => {
   try {
      // findOne where절을 이용해서 특정한 메서드의 값들을 가져온다
      const AuthorandBook = await Author.findOne({
         where: { id: req.params.id },
         include: {
            model: Book,
         },
      })
      if (!AuthorandBook) {
         return res.status(404).json({ message: '저자를 찾을 수 없습니다.' })
      }
      res.status(200).json(AuthorandBook)
   } catch (error) {
      console.error(error)
      next(error)
   }
})

module.exports = router
