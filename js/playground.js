// X  write a function that accepts 
//X a person full name 
//and returns first name and last name split up as two seperate strings. 
//

//DECLARE
function fullNameSplitter(fullName){

    console.log("fullname is: ", fullName)

    var splitName = fullName.split(" ");
    console.log("split name: ",splitName)

    var formattedName = {
        firstName: splitName[0],
        lastName:splitName[1]
    }

    console.log("this is the formatted name",formattedName)

    return formattedName
}


//CALL IT


var splitFileForJack = fullNameSplitter("Jack Dinker");
var splitFileForAna = fullNameSplitter("Anastasiia Somchyk");

console.log("split file for Jack: ", splitFileForJack)
console.log("split file for Ana: ", splitFileForAna)

