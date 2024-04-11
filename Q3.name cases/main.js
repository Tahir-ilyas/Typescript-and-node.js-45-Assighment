// Q.3 name case: store a person name in a variable, and than the print person name in lowercase,uppercase,titlecase?
// Lower case
var personName = "Muhammad Tahir";
console.log("lowercase:", personName.toLowerCase());
//upper case
console.log("uppercase:", personName.toUpperCase());
// Title case
console.log("titlecase:", personName.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
