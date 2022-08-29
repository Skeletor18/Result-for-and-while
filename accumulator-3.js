let programmingLanguage = ['C++','JavaScript',"php",'C#','Java','Pyton','Rust','Pascal','Go','Arduino']
let accumulator = []
for(let i = 0; i < programmingLanguage.length; i++){
    if(programmingLanguage[i].length > 3){
        accumulator.push(programmingLanguage[i])
    }
}
console.log(accumulator)