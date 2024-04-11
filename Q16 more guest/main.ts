//Q16. More Guest: you just found bigger dinner table,so now more spaces is available. think of three more guests to invite 
// dinner. start your program from exercise 15. add a print statement to the end of your programing informing people 
// that you found a bigger dinner table. add one new guest to the beginning of your array.

let guest_list: string[] = ['Hassan', 'Kamran','Rashid'];
for(let i=0; i<guest_list.length; i++){
    console.log('Respecteed Sir/Madam' + guest_list[i]+ ',\n we invited you on dinner tommorow. \n thank you \n');
}
let not_present : string = 'Irfan';
let new_guest: string = 'Daniyal Nagori';
guest_list[1] = new_guest;
for(let i=0; i<guest_list.length; i++){
    console.log('Respected Sir/Madam' + guest_list[i]+ ',\n we invited you on dinner tommorow. \n thank you \n');
}
guest_list.unshift('Mohsin','Umer','Saqib',);
for(let i=0; i<guest_list.length; i++){
    console.log('Respected Sir/Madam'+ guest_list[i] + ',\n we invited you on dinner tommorow. we found big table so we decide to invite 3 more guest. \n thank you \n');
}