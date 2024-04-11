// 23. Conditional Tests: Write a series of conditional tests. Print a statement
// describing each test and your prediction for the results of each test. Your code
// should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
// test 1 Equality comparision
let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');
// test 2 strict equality comparision
console.log("Is car === 'subaru'? I predict True. ");
console.log(car === 'subaru');
// Test 3 inequality comparision
console.log("Is car != 'subaru' I predict false.");
console.log(car != 'subaru');
// Test 4 strict inequality comaprision
console.log("Is car !== 'subaru'? I predict false.");
console.log(car !== 'subaru');
// Test 5 less than comparision
console.log("Is car < 'subaru'? I predict false.");
console.log(car < 'subaru');
// Test 6 greater than comparision
console.log("Is car> 'subaru'? I predict false. ");
console.log(car > 'subaru');
// Test 7 less than equal comparision
console.log("Is car<= 'subaru'? I predict True.");
console.log(car <= 'subaru');
// Test 8 Greater than or equal comparision
console.log("is car>= 'subaru'? I predict True.");
console.log(car >= 'subaru');
// Test 9 checking truthiness true
console.log("Is car? I predict True.");
console.log(car);
// Test 10 checking fallness
console.log("Is !car? I predict false.");
console.log(!car);
export {};
