Array.prototype.remove = function(item) {
    const index = this.indexOf(item);

    if (index > -1) { 
        this.splice(index, 1);
    }

    return item;
}

const searchLower = (items) => {
    let lowerItem = items[0];
    let lowerIndex = 0;

    items.forEach((item, index) => {
        if(item < lowerItem) {
            lowerItem = item;
            lowerIndex = index;
        }
    });

    return lowerIndex;
}

const selectionOrder = (items) => {
    const newItems = [...items];

    return items.reduce((total) => {
        const lowerIndex = searchLower(newItems);
        const lowerItem = newItems[lowerIndex];
        total.push(newItems.remove(lowerItem));
        return total;
    }, []);
};


console.log(selectionOrder([5,3,2,6,10]));
