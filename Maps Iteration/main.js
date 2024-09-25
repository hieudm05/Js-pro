openingHours = {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 12,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  }
const question = new Map([
    ['question', 'What is the best programming language in the world?'],
    [1,'C'],
    [2,'java'],
    [3,'javascript'],
    ['corect',3],
    [true, 'Correct'],
    [false, 'Try again!']
])
console.log(question);
//Convert object to map
console.log(Object.entries(openingHours));
const housrsMap = new Map(Object.entries(openingHours))

//Quiz app
console.log(question.get("question"))
for (const [key, values] of question) {
    if(typeof key === "number"){
        console.log(`Answer ${key}: ${values}`)
    }
}

// 
// const chose = Number(prompt("Your Answer :"));
const chose = 3
const result = question.get( chose === question.get("corect"))
console.log(result);
// Convert map to array
console.log([...question]);
// [keys, values]
// console.log(question.entries())
//[keys]
console.log([...question.keys()])
//[values]
console.log([...question.values()]);