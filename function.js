function forEach(arr, func) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr.push(func(arr[i]))
    }
    return newArr
}

const nameArray = ['samuel', 'david', 'reyhan', 'haris']

// const stringLength = (value) => value.length

const inihasil = forEach(nameArray, (value) => {
    return value.length
})
console.log(inihasil)
