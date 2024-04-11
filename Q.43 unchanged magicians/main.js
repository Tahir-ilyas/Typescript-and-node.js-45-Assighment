// 43. Unchanged Magicians: Start with your work from Exercise 41. Call the
// function make_great() with a copy of the array of magicians’ names. Because the
// original array will be unchanged, return the new array and store it in a separate array.
// Call show_magicians() with each array to show that you have one array of the original
// names and one array with the Great added to each magician’s name.
function show_magicians(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
;
function make_great2(magicians) {
    const greatMagicians = [];
    for (let i = 0; i < magicians.length; i++) {
        greatMagicians2.push(magicians[i] + ' the great');
        console.log(greatMagicians2);
    }
    return greatMagicians;
}
;
const magicians3 = ["Nicola", "Jean Hugard", "Burling Hull", "Ricky Jay"];
const greatMagicians2 = make_great2(magicians3);
show_magicians(magicians3);
show_magicians(greatMagicians2);
export {};
