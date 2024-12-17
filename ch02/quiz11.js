const fs = require('fs')

function readFileAndUppercase(filePath) {
   // 파일 읽는 코드 작성
   fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
         console.error(err)
         return
      }
      console.log(data.toUpperCase())
   })
}

readFileAndUppercase('input.txt')
