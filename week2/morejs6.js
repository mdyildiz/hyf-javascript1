function vehicle (color, code, age) {
    if (code==1) {
        if ( age>0 ) {
            return  color + ' used ' + ' car' ;
        } else {
            return  color + ' new ' + ' car' ;
        }
    } else {
        if ( age>0 ) {
            return color + ' used ' + ' motorbike' ;
        } else {
            return color + ' new ' + ' motorbike' ;
        }
    }
}
console.log(vehicle('blue', 1, 5));


