const binarySearch = (items, item, startIndex = 0, endIndex = items.length - 1) => {
    if(startIndex <= endIndex) {
        const middleIndex = Math.floor((startIndex + endIndex) / 2);
        const middleItem = items[middleIndex];
        
        if(middleItem === item) {
            return middleIndex;
        }

        if(middleItem > item) {
            return binarySearch(items, item, startIndex, middleIndex - 1);
        }

        if(middleItem < item) {
            return binarySearch(items, item, middleIndex + 1, endIndex);
        }
    }

    return null;
}

const numbers = [1,3,5,7,9];

console.log(binarySearch(numbers, 3));













