// Greeting: start with the array you used in exercise 11,but isted of just printing each person name print message to them. the text of each message should be the same but
// each message should be personalized with the person name 
let members: string[] = ['Hassan','Kamran','Salman','Samreen','Sana','saima'];
let message: string= 'I wish to help poor peoples:';
for (let i=0; i<members.length; i++) {
    console.log(message + members[i]);
}