var w = [0,1,2,3,4,5]
var x = ['Andi','Seto','Seno']

var filterNama = a.filter(function(a){
    return a.includes('S')
})

var mapNama = a.map(function(val){
    return val + 'Saya'
})

var mapAngka = w.map(function(val){
    return val + 5
})


console.log(mapAngka)