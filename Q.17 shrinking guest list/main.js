// 17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print
// a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end
// of your program.
let guest_list = ['Hassan', 'Kamran', 'Rashid'];
// for(let i=0; i<guest_list.length; i++){
//     console.log('Respecteed Sir/Madam' + guest_list[i]+ ',\n we invited you on dinner tommorow. \n thank you \n');
// }
let not_present = 'Irfan';
let new_guest = 'Daniyal Nagori';
guest_list[1] = new_guest;
// for(let i=0; i<guest_list.length; i++){
//     console.log('Respected Sir/Madam' + guest_list[i]+ ',\n we invited you on dinner tommorow. \n thank you \n');
// }
guest_list.unshift('Mohsin', 'Umer', 'Saqib');
// for(let i=0; i<guest_list.length; i++){
//     console.log('Respected Sir/Madam'+ guest_list[i] + ',\n we invited you on dinner tommorow. we found big table so we decide to invite 3 more guest. \n thank you \n');
// }
console.log(`\n unfortunitely we can not arrange big table, only two peoples allow.`);
while (guest_list.length > 2) {
    let remove_guest = guest_list.pop();
    console.log(`sorry sir/Madam.${remove_guest} you are not invited to dinner.`);
    for (let i = 0; i < guest_list.length; i++) {
        console.log(`Respected Sir/Madam '+ guest_list[i] +' ,\n yes you are still invited on tommorow dinner. \n Thank you \n'`);
    }
    guest_list.splice(0, 2);
    console.log(guest_list);
}
export {};
