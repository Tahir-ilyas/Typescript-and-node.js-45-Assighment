// 24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
let car = 'subaru';
let age = 30;
let numbers = [1, 2, 3, 4, 5];
// Test 1 Equality (true)
console.log("Is car == 'Subaru'? I predict True.");
console.log(car == 'subaru');
// Test 2 strict equality (false)
console.log("Is car === 'subaru'? I predict false.");
console.log(car === 'subaru');
// Test 3 inequality (true)
console.log("Is car != 'Suzuki'? I predict true.");
console.log(car != 'Suzuki');
// Test 4 inequality (false)
console.log("is car!== 'subaru'? I predict false.");
console.log(car !== 'subaru');
// lower case function test
//Test 5 lower case conversion (true)
console.log("Is car.toLowerCase ()==? I predict true");
console.log(car.toLowerCase() == 'subaru');
//Test 6 lower case conversion (false)
console.log("Is car === car. toLowerCase()? I predict false.");
console.log(car === car.toLowerCase());
// Numerical test
// Test 7 Equality (true)
console.log("Is age == 25? I predict true.");
console.log(age == 25);
// Test 8 inequality (false)
console.log("Is age != 30? i predict true");
console.log(age != 30);
// Test 9 Greater than false
console.log("Is age>30? I predict false");
console.log(age > 30);
// Test 10 less than or equal (True)
console.log("Is age <= 25? I predict true.");
console.log(age <= 25);
// Test 11 and (True)
console.log("Is age >20 && age <30? I predict true");
console.log(age > 20 && age < 30);
// Test 12 Or (false)
console.log("Is age >30 || age<18? I predict false");
console.log(age > 30 || age < 18);
// Test 13 in Array (true)
console.log("Is 3 in numbers? I predicr true.");
console.log(3 in numbers);
// tets 14 not in array
console.log("Is 6 not a numbers? I predict false.");
console.log(6 in numbers);
export {};
