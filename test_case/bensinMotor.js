const kendaraan = [
    {
        pemilik: '1',
        transmisi: 'matic',
        tahun: 2017,
        type: 'mobil',
    },
    {
        pemilik: '2',
        transmisi: 'manual',
        tahun: 2015,
        type: 'mobil',
    },
    {
        pemilik: '3',
        transmisi: 'matic',
        tahun: 2020,
        type: 'motor',
    },
    {
        pemilik: '4',
        transmisi: 'matic',
        tahun: 2017,
        type: 'motor',
    },
    {
        pemilik: '5',
        transmisi: 'manual',
        tahun: 2019,
        type: 'motor',
    },
    {
        pemilik: '4',
        transmisi: 'manual',
        tahun: 2019,
        type: 'motor',
    },
    {
        pemilik: '5',
        transmisi: 'manual',
        tahun: 2019,
        type: 'motor',
    },
    {
        pemilik: '5',
        transmisi: 'manual',
        tahun: 2019,
        type: 'motor',
    },
    {
        pemilik: '1',
        transmisi: 'manual',
        tahun: 2019,
        type: 'motor',
    },
]

const orang = [
    {
        nama: 'ikhadany',
        id: '2',
        domisili: 'purwokerto',
    },
    {
        nama: 'rahma',
        id: '1',
        domisili: 'depok',
    },
    {
        nama: 'amos',
        id: '4',
        domisili: 'jakarta barat',
    },
    {
        nama: 'diyah',
        id: '3',
        domisili: 'rembang',
    },
    {
        nama: 'arya',
        id: '5',
        domisili: 'jakarta',
    },
    {
        nama: 'difah',
        id: '7',
        domisili: 'jakarta',
    },
    {
        nama: 'malay',
        id: '6',
        domisili: 'jakarta',
    },
]

// const hasil = [
//     {
//         pemilik: 'rahma',
//         kendaraan: {
//             transmisi: 'matic',
//             tahun: 2017,
//             type: 'mobil',
//         },
//     },
// ]

let hasil = []
for (let i = 0; i < kendaraan.length; i++) {
    for (let j = 0; j < orang.length; j++) {
        if (kendaraan[i].pemilik === orang[j].id) {
            hasil.push({
                pemilik: orang[j].nama,
                kendaraan: {
                    transmisi: kendaraan[i].transmisi,
                    tahun: kendaraan[i].tahun,
                    type: kendaraan[i].type,
                },
            })
        }
    }
}
console.log(hasil)

// soal no 1
// yang kita kerjain tadi dibuat jadi function
// soal no 2
// bikin function buat nyari mobil berdasarkan tahun
// soal no 3
// bikin function buat nge sort hasil dari function 1  berdasarkan nama pemilik
// soal no 4
// bikin function buat untuk menghasilkan data sperti dibawah ini

// const hasil2 = [
//     {
//         pemilik: 'rahma',
//         kendaraan: [
//             { transmisi: 'matic', tahun: 2017, type: 'mobil' },
//             { transmisi: 'matic', tahun: 2017, type: 'mobil' },
//         ],
//     },
// ]
