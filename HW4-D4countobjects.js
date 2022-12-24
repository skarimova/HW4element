function getCount(objects) {
    let count = 0;
    objects.forEach(i => {
        if(i.x === i.y) count++;
    })
    return count;
}

console.log(getCount([{x:6, y: 2}]))