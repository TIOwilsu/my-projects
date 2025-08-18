function quicksort(items) {
    if(items.length < 2){
        return items;
    }

    const [pivot] = items;
    const minors = getMinorNumbers(items);
    const bigger = getBiggerNumbers(items);

    return [...quicksort(minors), pivot, ...quicksort(bigger)]
}

function getMinorNumbers(items) {
    const [pivot] = items;
    items.shift();
    return items.filter(item => item <= pivot);
}

function getBiggerNumbers(items) {
    const [pivot] = items;
    items.shift();
    return items.filter(item => item > pivot);
}


const numbers = [10,5,2,3];
console.log(quicksort(numbers));