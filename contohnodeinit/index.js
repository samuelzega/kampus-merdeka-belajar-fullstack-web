const http = require('http')

const fs = require('fs')

function onRequest(req, res) {
    // Memberi status 200
    // const htmlFile = fs.readFileSync('./index.html', 'utf-8')
    const data = [
        { name: 'Adrian', id: 1, memilih: 'ukraina' },
        { name: 'Diana', id: 6, memilih: 'ukraina' },
        { name: 'Diyah', id: 9, memilih: 'ukraina' },
        { name: 'Elin', id: 10, memilih: 'ukraina' },
        { name: 'Ikadhanny', id: 11, memilih: 'ukraina' },
        { name: 'Bintang', id: 16, memilih: 'ukraina' },
        { name: 'Fadilllah', id: 17, memilih: 'ukraina' },
        { name: 'Rizky', id: 18, memilih: 'ukraina' },
        { name: 'Aryaputra', id: 19, memilih: 'ukraina' },
        { name: 'Rahma', id: 20, memilih: 'ukraina' },
        { name: 'Wahyu', id: 23, memilih: 'ukraina' },
    ]
    res.setHeader('Content-Type', 'application/json')
    res.writeHead(200)
    res.end(JSON.stringify(data))
}

const server = http.createServer(onRequest)

server.listen(8000, '0.0.0.0', () => {
    console.log('Server sudah berjalan, silahkan buka http://0.0.0.0:%d', 8000)
})
