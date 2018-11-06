function myFunc(theObject) {
        theObject.brand = myCar.brand;
        theObject.model = myCar.model;
        theObject.year = myCar.year;
  }
  
  let myCar= {brand: 'Honda', model: 'Accord', year: 2018};
  
  myFunc(myCar);
  
  x = myCar.brand;
  y = myCar.model;
  z = myCar.year;

  console.log(x);
  console.log(y);
  console.log(z);
