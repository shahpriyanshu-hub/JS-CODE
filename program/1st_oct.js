const value = [22, 32, 47, 69, 80, 70]

let result = []

// for(let i = 0; i < value.length; i++){
//     // console.log("i is ", i)
//    console.log(value[i])
// }

for(let i = value.length -1; i >= 0; i--){
    // console.log("i is", i)
    // console.log(value[i])
    result.push(value[i])
}
console.log("result = ", result)
console.log(result[4])
result.pop(result[4])

console.log("answer = ", result)