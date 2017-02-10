// Object Literal - with key/value pairs
var person = {
    name: 'Ted',
    state: 'Idaho',
    age: 39,
    collegeStudent: true,
    courses : ['math', 'science', 'music']
};


// Accessing the value
alert(person['name']);
alert(person.name); // more common

// change a property
person.name = "Bill";

// Looping through key values in an object
// You can use any variable in places of 'key'
for( var key in person) {
    alert(key); // alerts property names
}

// Looping through the property values 
for( var key in person) {
    alert(person[key]); // alerts out property value, you can't use dot notation here
}


// Alternate way 
for( var key in person) {
    console.log(key, ': ', person[key]); // logs out keys and values, again you can't use dot notation
}