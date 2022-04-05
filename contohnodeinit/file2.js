// const getname = require('./file1')

// const hasilnama = getname.getnama5('rahma')

// console.log(hasilnama)

const fs = require('fs')

const data = []

const dataToString = JSON.stringify(data)

fs.writeFileSync('./data.js', dataToString)

// const dataFromFile = fs.readFileSync('data.js')
// const parsedData = JSON.parse(dataFromFile)

// console.log(parsedData)
