// 조건:
// 1. 총 메모리 용량 (GB 단위)과 사용 가능한 메모리 용량 (GB 단위)을 출력하세요.
// 2. Node.js의 `os` 모듈을 사용하세요.

const os = require('os')

const totalmemoryUsageInBytes = os.totalmem()
const totalmemoryUsageInGB = totalmemoryUsageInBytes / (1024 * 1024 * 1024)

const freeMemoryUsageInBytes = os.freemem()
const freeMemoryUsageInGB = freeMemoryUsageInBytes / (1024 * 1024 * 1024)

console.log(`총 메모리 : ${totalmemoryUsageInGB.toFixed(0)}GB`)
console.log(`사용 가능 메모리 : ${freeMemoryUsageInGB.toFixed(0)}GB`)
