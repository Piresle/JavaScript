
let num = [5, 8, 4] //vetor de 3 elementos

console.log(`primeiro elemento: ${num[0]}`)
console.log(`segundo elemento: ${num[1]}`)
console.log(`terceiro elemento: ${num[2]}`)
console.log(`array: ${num}`)

num[3] = 6

console.log(`elemento adicionado: ${num[3]}`)
console.log(`array: ${num}`)

num.push(7)

console.log(`elemento adicionado por "push": ${num[4]}`)
console.log(`array: ${num}`)

console.log(`"tamanho" do vetor: ${num.length}`)

console.log(`colocando todos os elemento em ordem crescente: ${num.sort()}`)




let x = [11, 13, 12, 10, 15, 20] 
x.sort()
for(let pos=0; pos < x.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${x[pos]}`)
}




let n = [24, 35, 67, 23, 30, 55]
for(let pos in n) {
    console.log(`A posição ${pos} tem o valor ${n[pos]}`)
}




console.log(n.indexOf(67))
console.log(x.indexOf(15))
console.log(x.indexOf(8))
