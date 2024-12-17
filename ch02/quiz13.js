const fs = require('fs')

function copyFile(src, dest) {
   //fs.copyFile을 사용하여 특정 파일(example.txt)을 새로운 파일(example-copy.txt)로 복사하는 프로그램을 작성
   fs.copyFile(src, dest, (err) => {
      if (err) {
         console.error(err)
      } else {
         console.log('복사 완료')
      }
   })
}

copyFile('example.txt', 'example-copy.txt')
