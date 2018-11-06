for (i=0 ; i<(listOfVehicles.length) ; i++) {
    if (i==0) {
        listOfVehicles[i]=listOfVehicles[i] + 's' ;
    }
    else if (i<(listOfVehicles.length-1)) {
        listOfVehicles[i]=' '+listOfVehicles[i] + 's' ;
    } else {
        listOfVehicles[i]=' and ' +listOfVehicles[i] + 's.' ;
    }
}

listOfVehicles ("cars" , "motorbikes", "caravans", "bikes");
console.log("Amazing Joe's Garage, we service "+listOfVehicles[0]+','+listOfVehicles[1]+','+listVehicle[2]+ listVehicle[3]);
