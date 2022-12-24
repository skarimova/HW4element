class Polygon{
    constructor(arr) {
        this.arr = arr;
    };
    
    perimeter(){
        let p = 0;
        this.arr.forEach(i => {
            p = p + i;
        })
        return p;
    }
}

const p = new Polygon([1, 2, 3])
console.log(p.perimeter())