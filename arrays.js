// Looping through an array
var students = ['tom', 'frank', 'sally', 'art'];
for (var i = 0; i < students.length; i++){
    alert(students[i]);
}

/* Array methods - part 1
   unshift - add element to beginning of an array, returns new length
   push - add element to the end of an array, returns new length
   
   shift - remove the first item from an array, and return it
   pop - remove the last item from an array, and return it
*/

/* Array methods - part 2
   join - joins all elements into a string, with separator you provide
   concat - combines current array with another  
            myArray1.concat(myArray2);
   
   indexOf - let's you search array for a particular value
             returns position if it exists
             returns -1 if it doesn't exist
             myArray1.indexOf('car');   
*/


// Use indexOf to check if an item is available
var inStock = ['shoes', 'hats', 'gloves', 'pants', 'socks', 'shirts'];
var search;
function print(message) {
    
    
}

while(true) {
    search= prompt("Search for a product. Type 'list' to show the inventory and 'quit' to exit");
    search = search.toLowerCase(); // make sure caps or lowercase work
    if (search === 'quit') {
        break; // exit loop, end program
    }
    else if (search === 'list'){
        alert(inStock.join(', '));
    } else {   // search for an item in the array
        if(inStock.indexOf(search) > -1 ) {
            alert(search + ' is in stock')
        }
        else {
            alert(search + ' is not in stock')
        }
    }
}

// Two-dimensional Arrays
var grades = [
    [70, 95, 68, 89],
    [80, 75, 78, 86],
    [90, 85, 64, 99]   
];

// 1st student = grades[0]
// 2nd student = grades[1]
// 3rd student = grades[2]
// get last score from 1st student - grades[0][3]
// get first score from 3rd student - grades[2][0]


