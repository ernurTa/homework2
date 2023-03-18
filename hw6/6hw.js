
console.log(calculateAverage([4,5,8,6,9]));

function  calculateAverage(number){
    let sum = 0;
    for(let i = 0 ; i < number.length ; i++){
        sum += number[i];   
    }
    return sum/number.length;
}
console.log(calculateAverage([2,4,6,8,10]));