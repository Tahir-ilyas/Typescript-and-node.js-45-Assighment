// Q15. Changing Guest List: You just heard that one of your guests can’t make the
//dinner, so you need to send out a new set of invitations. You’ll have to think of
//someone else to invite.
//• Start with your program from Exercise 14. Add a print statement at the
//end of your program stating the name of the guest who can’t make it.
//• Modify your list, replacing the name of the guest who can’t make it with
//the name of the new person you are inviting.
//• Print a second set of invitation messages, one for each person who is still in your list.
let guest_list = ['hassan', 'zohaib', 'kamran', 'shahid', 'rida'];
for (let i = 0; i < guest_list.length; i++) {
    console.log('Respected Sir/Madam' + guest_list[i] + ',\nwe invited to on Sunday night dinner.\n\nThank you\n');
}
let not_present = 'kamran';
let new_guest = 'saqib';
guest_list[2] = new_guest;
for (let i = 0; i < guest_list.length; i++) {
    console.log('Respected Sir/Madam' + guest_list[i] + ',\nwe invited to on Sunday night dinner.\n\nThank you\n');
}
console.log(`Mr. ${not_present} will not comming on sunday night dinner.`);
export {};
