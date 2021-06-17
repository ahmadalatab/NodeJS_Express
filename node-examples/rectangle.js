module.exports = (x, y, callback) => {
    if (x<=0 || y <=0){
        callback(new Error("Dimensions of rectangle must be greater than zero"))
    } else {
        setTimeout(() => 
        callback(null, {
            perimeter : () => 2 * (x + y),
            area : () => x * y
        }),
        2000)
    };
};



