 // Q.3 name case: store a person name in a variable, and than the print person name in lowercase,uppercase,titlecase?
 
 // Lower case
 let personName: string= "Muhammad Tahir"
 console.log ("lowercase:", personName.toLowerCase());

 //upper case
 console.log ("uppercase:", personName.toUpperCase());

 // Title case
 console.log("titlecase:", personName.replace(/\bw/g,c => c.toUpperCase()));
