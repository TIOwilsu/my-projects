const binarySearch = (items, item) => {
    let startIndex = 0;
    let endIndex = items.length - 1;

    while(startIndex <= endIndex) {
        let middleIndex = Math.floor((startIndex + endIndex) / 2);
        let middleItem = items[middleIndex];

        if(middleItem === item) {
            return middleIndex;
        }

        if(middleItem > item) {
            endIndex = middleIndex - 1;
        }

        if(middleItem < item) {
            startIndex = middleIndex + 1;
        }
    }

    return null;
}

const numbers = [1,3,5,7,9];

console.log(binarySearch(numbers, 3));













