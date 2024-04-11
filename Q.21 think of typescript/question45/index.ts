let guestArr: string[] = ["Yusra", "Ahsan", "Hassan", "Javeed"];
let canNotAttend: string = "Ahsaan";
let newGuest: string = "Kamran"
guestArr[guestArr.indexOf(canNotAttend)] = newGuest;

console.log(guestArr)