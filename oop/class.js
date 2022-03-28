class Siswa {
    static followingKampusMerdeka = true
    constructor(name) {
        if (this.constructor === Siswa) {
            throw new Error('Cannot instantiate Siswa')
        }
        this.name = name
        this.kelas = 'FSW6'
        this.nilai = ''
    }
    #introduce() {
        console.log('Hi my name is ', this.name)
    }
    _setNilai(number) {
        this.#introduce()
        switch (true) {
            case number < 50:
                this.nilai = 'Kurang'
                break
            case number <= 80:
                this.nilai = 'Baik'
                break
            case number <= 100:
                this.nilai = 'Cukup Baik'
                break
            default:
                this.nilai = ''
                break
        }
    }
}

// const Arya = new Siswa('Arya')
// Arya.setNilai(90)

class Programmer extends Siswa {
    constructor(name, pl) {
        super(name)
        this.pl = pl
    }
    showMyPl() {
        console.log(this.pl)
    }
    // setNilai(number) {
    //     // super.introduce()
    //     this.nilai = 'jelek'
    // }
}
try {
    const Fadilah = new Siswa('Fadilah')
} catch (error) {
    console.log(error)
}
// Fadilah._setNilai(90)
// console.log(Fadilah)
