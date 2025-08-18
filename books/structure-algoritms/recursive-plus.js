function plus(values) {
    if(values.length === 0) {
        return 0;
    }

    const [currentValue] = values;
    values.shift();
    const total = plus(values);
    
    return parseInt(currentValue) + parseInt(total);
}

const numbers = [1,2,3,4,5,6];
console.log(plus(numbers));



