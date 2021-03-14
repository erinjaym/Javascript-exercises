const getTheTitles = function(array) {

let answer = array.map(function (book) { return book.title;})

console.log(array);
console.log(array[0].title);
console.log(array[1].title);
return answer;



}

module.exports = getTheTitles;
