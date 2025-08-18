function findMaxValue(items) {
    const [firstItem, secondItem] = items;

    if(items.length === 2) {
        return firstItem > secondItem ? firstItem : secondItem;
    }

    items.shift();
    const subMax = findMaxValue(items);

    return firstItem > subMax ? firstItem : subMax;
}

const items = [2,3,5,4,1];
findMaxValue(items);