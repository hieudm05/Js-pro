const rest1 ={
    name: 'Capri',
    // numGuests: 0,
    numGuests: 20,
};
const rest3 ={
    name: 'Capri',
    numGuests: null,
};
const rest2 = {
    name: 'La Piazza',
    owner: 'Giovanni Rossi',
};
// rest1.numGuests ||= 10 // 20
// rest2.numGuests ||= 100; //100

//nullish
rest1.numGuests ??= 10; 
rest3.numGuests ??= 10;

// rest2.owner = rest2.owner && '<ANONYMOUS>'; //ANONYMOUS
// rest1.owner = rest1.owner && '<ANONYMOUS>'; //undefined

// Nếu variable là truthy, thì variable sẽ được gán giá trị newValue.
// Nếu variable là falsy, thì nó sẽ giữ nguyên giá trị hiện tại.
rest1.owner &&= '<ANONYMOUS>'; //""
rest2.owner &&= '<ANONYMOUS>'; //'<ANONYMOUS>'
console.log(rest1) 
console.log(rest2)
console.log(rest3)