let numbers = [22,33,-54,34,15,-9,45,-14,12,10]
accumulator = 0
let i = 0
while(i < numbers.length){
    if(numbers[i] > 0){
        accumulator += numbers[i]
    }
    i++
}
console.log(accumulator)