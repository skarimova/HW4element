function modifyArray(nums) {
    let results = []
    nums.forEach(i => {
        if(i%2 == 0) results.push(i*2);
        else results.push(i*3)
    })
    return results  
}

modifyArray([1, 2, 3])