let findTheOldest = function(array) {
let agesArray = array; 


agesArray.forEach (person => {
    person['age'] = 0;
    if (person.yearOfDeath > 0) //dead
    { 
        person['age'] = person.yearOfDeath - person.yearOfBirth;
    }
    else //alive
    {
        let date = new Date().getFullYear();
        person['age'] = date - person.yearOfBirth;
    }
});

/* MY OG CODE ..> 
    for (arrayPlace = 0; arrayPlace < array.length; arrayPlace++ )
        if (array[arrayPlace]['yearOfDeath']) //dead
        {
         agesArray[arrayPlace]['age'] =  array[arrayPlace]['yearOfDeath'] - array[arrayPlace]['yearOfBirth'];
        }
        else
        { //Still alive
            let theDate = new Date();
            let date = theDate.getFullYear(); 
            agesArray[arrayPlace]['age'] = date - array[arrayPlace]['yearOfBirth']; 
            console.log(agesArray);
        }
*/

    // sort by age
    agesArray.sort((person1, person2) => (person1.age < person2.age ) ? 1 : -1);
    return agesArray[0];


}

module.exports = findTheOldest
