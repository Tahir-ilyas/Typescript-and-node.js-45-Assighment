let guestArr = ["Yusra", "Ahsan", "Hassan", "Javeed"];
let canNotAttend = "Ahsaan";
let newGuest = "Kamran";
guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
console.log(guestArr);
export {};
