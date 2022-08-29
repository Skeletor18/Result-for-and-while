let name = ['Akhmed', 'Adam','Muslim','Islam','Ismail','Asadin','Ilez','Aslan','Beslan','Magomed']
let accumulator = []
for(let i = 0; i < name.length; i++){
    if(name[i][0] == 'A'){
        accumulator.push(name[i])
    }
}
console.log(accumulator)