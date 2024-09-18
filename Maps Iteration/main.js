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
    [1,'java'],
    [1,'javascript'],
    ['corect',3],
    [true, 'Correct'],
    [false, 'Try again!']
])
console.log(question);
//Convert object to map
console.log(Object.entries(openingHours));
const housrsMap = new Map(Object.entries(openingHours))
