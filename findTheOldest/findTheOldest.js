let findTheOldest = function(array) {
    array.forEach (person => {
        person['age'] = 0;
        if (person.yearOfDeath > 0) //if person is dead
        { 
        person['age'] = person.yearOfDeath - person.yearOfBirth;
        }
        else //person is alive
        {
            let date = new Date().getFullYear();
            person['age'] = date - person.yearOfBirth;
        }
    });

    array.sort((person1, person2) => (person1.age < person2.age ) ? 1 : -1);   // sort by age
    return array[0];

/* MY Original CODE 
let agesArray = array; 
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

agesArray.sort((person1, person2) => (person1.age < person2.age ) ? 1 : -1);   // sort by age
return agesArray[0];
*/



}

module.exports = findTheOldest
