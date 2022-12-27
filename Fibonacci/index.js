// Recursive solution of fibonacci
function fibsRec(num) {
    if(num < 2) {
        return num;
    } else {
        return fibsRec(num - 1) + fibsRec(num - 2);
    }
}
function callfibsRec(input){
    if(input <= 0) {
        console.log('Not a positive integer');
    }
    else {
        let array = [];
        for(let i = 0; i < input; i++) {
            array.push(fibsRec(i));
        }
        console.log(`Fibonacci: ${array}`)
    }
}
callfibsRec(8)

// Iteration solution of fibonacci
function fibs(num) {
    const sequence = [0, 1];
    if (num <= 0){return 'Not a positive integer'};
    if (num < 2){return sequence.slice(0,num)}
    while (sequence.length < num){
        sequence.push(sequence[sequence.length - 2] + sequence[sequence.length - 1])
    }
    return sequence;
}
console.log(fibs(8))