function countListItems(items)  {
    if(items.length === 0 ) {
        return 0;
    }

    items.shift();
    const count = countListItems(items)

    return count + 1;
}

const list = [1,2,3,4,5,6];
