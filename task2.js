const eesnimi = 'Siim'
const päev = '21'
const kuu = '08'
const aasta = '2001'
const hobid = ['tõstmine', 'autod']
const about = {eesnimi, päev, kuu, aasta, hobid}

const sünnipäev = päev + '.' + kuu + '.' + aasta

console.log(sünnipäev)
console.log(about)

const eesnimi1 = 'Siim'
const synnipäev = new Date(2001, 7, 22)
const hobid2 = ['tõstmine', 'autod']

const about1 = {eesnimi1, synnipäev, hobid2}

console.log(synnipäev)
