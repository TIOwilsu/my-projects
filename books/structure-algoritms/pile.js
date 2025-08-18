const boxes = []

class Box {
    constructor(hasKey){
        this.hasKey = hasKey;
    }
}

const setBoxes = () => {
    boxes.push(new Box(false));
    boxes.push(new Box(false));
    boxes.push(new Box(false));
    boxes.push(new Box(true));
    boxes.push(new Box(false));    
}

const findKey = (index = 0) => {
    const box = boxes[index];

    if(box.hasKey) {
        return box;
    }

    return findKey(index - 1);
}


setBoxes();
console.log(findKey());



