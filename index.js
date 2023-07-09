let lenghtArray = Number(prompt('Введіть довжину масиву: '))
let arr = []
for (let i = 1; i <= lenghtArray; i++){
    let j = prompt(`Введіть ${i} число: `)
    arr.push(j)
}
console.log(arr)
console.log(arr.sort((a, b) => a - b))
arr.splice(1, 4)
console.log(arr)
