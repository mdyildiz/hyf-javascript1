function vehicleType (color, code) {
    if (code==1) {
        return color + ' car' ;
    } else {
        return color + ' motorbike' ;
    }
}
console.log(vehicleType('blue', 2));
