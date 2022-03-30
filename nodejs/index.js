const os = require('os')
const apapun = require('./persegi')
console.log('memori yang tersedia adalah: ', os.freemem())

console.log(
    'ini adlaah keliling persegi dengan sisi =5, ',
    apapun.kelilingPersegi(5)
)
console.log('ini adlaah luas persegi dengan sisi =5, ', apapun.luasPersegi(5))
