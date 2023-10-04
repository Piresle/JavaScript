// FUNÇÃO 01
function parimpar(n) {
    if (n%w == 0) {
        return 'PAR!'
    } else {
        return 'ÍMPAR!'
    }
}
console.log(parimpar()) //informar um número



// FUNÇÃO 02
function soma(n1=0, n2=0) {
    return n1 + n2
}
console.log(soma()) //informar um número



// FUNÇÃO 03
let v = function (x) {
    return n*2
}
console.log(v()) //informar um número



//FUNÇÃO 04
function fatorial1(num) {
    let fat = 1
    for(let c = n; c > 1; c--) {
        fat *= c
    }
    return fat
}
console.log(fatorial1()) //informar um número

// OU

function fatorial2(nume) {
    if (nume == 1) {
        return 1
    } else {
        return nume * fatorial2(nume-1)
    }
}
console.log(fatorial2()) //informar um número

