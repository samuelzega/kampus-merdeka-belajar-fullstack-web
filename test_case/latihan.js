const fsw6 = [
    {
        name: 'Adrian',
    },
    {
        name: 'Amos',
    },
    {
        name: 'Arya',
    },
    {
        name: 'Dhaniel',
    },
    {
        name: 'Dhewan',
    },
    {
        name: 'Diana',
    },
    {
        name: 'Diandra',
    },
    {
        name: 'Difa',
    },
    {
        name: 'Diyah',
    },
    {
        name: 'Elin',
    },
    {
        name: 'Ikadhanny',
    },
    {
        name: 'Ilyas',
    },
    {
        name: 'Ryas',
    },
    {
        name: 'Magdalisa',
    },
    {
        name: 'Edka',
    },
    {
        name: 'Bintang',
    },
    {
        name: 'Fadilllah',
    },
    {
        name: 'Rizky',
    },
    {
        name: 'Aryaputra',
    },
    {
        name: 'Rahma',
    },
    {
        name: 'Ryan',
    },
    {
        name: 'Silva',
    },
    {
        name: 'Wahyu',
    },
    {
        name: 'Samuel',
    },
]

for (let i = 0; i < fsw6.length; i++) {
    fsw6[i].id = i + 1
}

const voting = []

function vote(id, ukrainaRusia) {
    voting.push({ id, ukrainaRusia })
}

vote(1, 'ukraina')
vote(2, 'rusia')
vote(3, 'rusia')
vote(4, 'rusia')
vote(5, 'rusia')
vote(6, 'ukraina')
vote(7, 'netral')
vote(8, 'rusia')
vote(9, 'ukraina')
vote(10, 'ukraina')
vote(11, 'ukraina')
vote(12, 'rusia')
vote(13, 'rusia')
vote(14, 'rusia')
vote(15, 'rusia')
vote(16, 'ukraina')
vote(17, 'ukraina')
vote(18, 'ukraina')
vote(19, 'ukraina')
vote(20, 'ukraina')
vote(21, 'rusia')
vote(22, 'rusia')
vote(23, 'ukraina')
vote(24, 'rusia')

const checkWinner = function (arr) {
    let ukraina = 0
    let rusia = 0
    let netral = 0

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].ukrainaRusia === 'ukraina') {
            ukraina++
        } else if (arr[i].ukrainaRusia === 'rusia') {
            rusia++
        } else {
            netral++
        }
    }

    if (netral > rusia && netral > ukraina) {
        return {
            pemenang: 'tidak ada',
            hasilVoting: { ukraina, rusia, netral },
        }
    } else if (ukraina > rusia) {
        return { pemenang: 'ukraina', hasilVoting: { ukraina, rusia, netral } }
    } else {
        return { pemenang: 'rusia', hasilVoting: { ukraina, rusia, netral } }
    }
}

// console.log(checkWinner(voting))

// function checkVoters(value) {
//     let votersValue = []
//     for (let i = 0; i < voting.length; i++) {
//         if (voting[i].ukrainaRusia === value) {
//             votersValue.push(voting[i])
//         }
//     }
//     // console.log(votersValue)
//     let hasil = []
//     for (let i = 0; i < votersValue.length; i++) {
//         for (let j = 0; j < fsw6.length; j++) {
//             if (votersValue[i].id == fsw6[j].id) {
//                 hasil.push({
//                     ...fsw6[j],
//                     memilih: votersValue[i].ukrainaRusia,
//                 })
//                 break
//             }
//         }
//     }
//     console.log(hasil)
// }
function checkVoters(value) {
    const votersValue = voting.filter((item) => item.ukrainaRusia === value)
    let hasil = []
    for (let i = 0; i < votersValue.length; i++) {
        for (let j = 0; j < fsw6.length; j++) {
            if (votersValue[i].id == fsw6[j].id) {
                hasil.push({
                    ...fsw6[j],
                    memilih: votersValue[i].ukrainaRusia,
                })
                break
            }
        }
    }
    console.log(hasil)
}

checkVoters('ukraina')
