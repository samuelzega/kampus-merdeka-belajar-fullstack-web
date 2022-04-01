/**
 * Impor HTTP Standar Library dari Node.js
 * Hal inilah yang nantinya akan kita gunakan untuk membuat
 * HTTP Server
 * */
const http = require('http')
const { PORT = 8000 } = process.env // Ambil port dari environment variable

const fs = require('fs')
const path = require('path')
const PUBLIC_DIRECTORY = path.join(__dirname, '../public')
const handleExtension = require('./handleExtenstion')
// Request handler
// Fungsi yang berjalan ketika ada request yang masuk.
function onRequest(req, res) {
    console.log(1)
    let filePath = path.join(
        __dirname,
        '../public',
        req.url === '/' ? 'index.html' : req.url
    )
    handleExtension(filePath, res)
}

const server = http.createServer(onRequest)

// Jalankan server
server.listen(PORT, '0.0.0.0', () => {
    console.log('Server sudah berjalan, silahkan buka http://0.0.0.0:%d', PORT)
})
