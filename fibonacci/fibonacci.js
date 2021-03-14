const fibonacci = function(number) {
const theArray =[0,];
let nextNumber = 1;

// catch neg numbers with if statement
if (number < 0)
{
    return "OOPS";
}
else 
{
    for (arrayPosition = 1; arrayPosition <= number; arrayPosition++)
    {
    theArray[arrayPosition] = nextNumber; 
    nextNumber = nextNumber + theArray[arrayPosition-1];
    }

    return theArray[number];
}
}


module.exports = fibonacci
