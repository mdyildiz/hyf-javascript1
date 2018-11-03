let favoriteAnimals = ["blowfish", "capricorn", "giraffe"];
favoriteAnimals.push("turtle");
console.log(favoriteAnimals);
favoriteAnimals.splice(1, 0,  "meerkat")
console.log("The value of new array will be: " + favoriteAnimals );
console.log(favoriteAnimals);
console.log("The array has a length of: " + favoriteAnimals.length);
favoriteAnimals.splice(3, 1);
console.log(favoriteAnimals);
var a = favoriteAnimals.indexOf("meerkat");
console.log(a);
console.log("The item you are looking for is at index: " +favoriteAnimals[1]);
