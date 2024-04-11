// 27. Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.

// • If the alien is green, print a message that the player earned 5 points.

// • If the alien is yellow, print a message that the player earned 10 points.

// • If the alien is red, print a message that the player earned 15 points.

// • Write three versions of this program, making sure each message is printed for the appropriate color alien.

// Version 1
let alien_color: string = "Green";
 if(alien_color == "Green"){
    console.log("that the player earned 5 points");
}

else if (alien_color == "Yellow"){
console.log("that the player earned 10 points");
}
else if(alien_color == "Red"){
    console.log("That the player earned 15 points");
}else {
    console.log("Please select the Right color");
}
// Version 2
alien_color = "Yellow";
if(alien_color == "Yellow"){
    console.log("That the player earned 10 points");
}else if (alien_color == "Green"){
    console.log("that the player earned 5 points");
}else if (alien_color == "Red"){
    console.log("That thw player earned 15 points");
}else{
    console.log("Please select the right color");
}
 // Version 3 
 alien_color = "Red";
 if(alien_color == "Red"){
    console.log("That the player earned 15 points");
 }else if(alien_color == "Green"){
    console.log("That the player earned 5 points");
 }else if(alien_color == "Yellow"){
    console.log("That the player earned 10 points");
 }else{
    console.log("Please select the Right color");
 }