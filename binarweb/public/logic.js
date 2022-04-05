const topik1 = document.getElementById('topik1')
const topik2 = document.getElementById('topik2')
const topik3 = document.getElementById('topik3')
const topik4 = document.getElementById('topik4')
const topik5 = document.getElementById('topik5')
const topik6 = document.getElementById('topik6')
const desc = document.getElementById('descTopik')
topik1.addEventListener('click', (e) => {
    e.preventDefault()
    desc.innerHTML = 'INI ADALAH TOPIK 1'
})
topik2.addEventListener('click', (e) => {
    e.preventDefault()
    desc.innerHTML = 'INI ADALAH TOPIK 2'
})
topik3.addEventListener('click', (e) => {
    e.preventDefault()
    desc.innerHTML = 'INI ADALAH TOPIK 3'
})
topik4.addEventListener('click', (e) => {
    e.preventDefault()
    desc.innerHTML = 'INI ADALAH TOPIK 4'
})
topik5.addEventListener('click', (e) => {
    e.preventDefault()
    desc.innerHTML = 'INI ADALAH TOPIK 5'
})
topik6.addEventListener('click', (e) => {
    e.preventDefault()
    desc.innerHTML = 'INI ADALAH TOPIK 6'
})
